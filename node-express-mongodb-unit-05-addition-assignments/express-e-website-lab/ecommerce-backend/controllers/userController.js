const User = require("../models/User")
const jwt = require("jsonwebtoken")
const { hashPassword, comparePassword } = require("../helpers/hashPassword")
const { generateVerificationToken, sendVerificationEmail, sendPasswordResetEmail } = require("../helpers/emailService")
const crypto = require("crypto")

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  })
}

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body

    // Check if email already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" })
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Generate verification token
    const verificationToken = generateVerificationToken()

    // Create new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      verificationToken,
    })

    // Send verification email
    await sendVerificationEmail(user, verificationToken)

    // Return user data (without password)
    res.status(201).json({
      message: "User registered successfully. Please check your email to verify your account.",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      },
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Verify email
// @route   GET /api/users/verify/:token
// @access  Public
const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params

    // Find user with this token
    const user = await User.findOne({ verificationToken: token })

    if (!user) {
      return res.status(400).json({ message: "Invalid verification token" })
    }

    // Update user verification status
    user.isVerified = true
    user.verificationToken = undefined
    await user.save()

    res.status(200).json({ message: "Email verified successfully. You can now log in." })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Resend verification email
// @route   POST /api/users/resend-verification
// @access  Public
const resendVerification = async (req, res) => {
  try {
    const { email } = req.body

    // Find user
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    if (user.isVerified) {
      return res.status(400).json({ message: "Email already verified" })
    }

    // Generate new verification token
    const verificationToken = generateVerificationToken()
    user.verificationToken = verificationToken
    await user.save()

    // Send verification email
    await sendVerificationEmail(user, verificationToken)

    res.status(200).json({ message: "Verification email resent" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Login user
// @route   POST /api/users/login
// @access  Public
const login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Find user by email
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    // Compare passwords
    const match = await comparePassword(password, user.password)
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    // Check if email is verified
    if (!user.isVerified) {
      return res.status(401).json({
        message: "Email not verified. Please check your email for verification link.",
        needsVerification: true,
      })
    }

    // Create JWT
    const token = generateToken(user._id)

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
      },
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Login failed", error: err.message })
  }
}

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password")

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.json(user)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Update fields if provided
    if (req.body.username) user.username = req.body.username
    if (req.body.email && user.email !== req.body.email) {
      // Check if new email already exists
      const existingEmail = await User.findOne({ email: req.body.email })
      if (existingEmail) {
        return res.status(400).json({ message: "Email already in use" })
      }

      user.email = req.body.email
      user.isVerified = false

      // Generate new verification token
      const verificationToken = generateVerificationToken()
      user.verificationToken = verificationToken

      // Send verification email
      await sendVerificationEmail(user, verificationToken)
    }

    if (req.body.password) {
      user.password = await hashPassword(req.body.password)
    }

    const updatedUser = await user.save()

    res.json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        role: updatedUser.role,
        isVerified: updatedUser.isVerified,
      },
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Forgot password
// @route   POST /api/users/forgot-password
// @access  Public
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex")

    // Hash token and set to resetPasswordToken field
    user.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    // Set expire time (1 hour)
    user.resetPasswordExpire = Date.now() + 3600000

    await user.save()

    // Send email
    await sendPasswordResetEmail(user, resetToken)

    res.status(200).json({ message: "Password reset email sent" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Reset password
// @route   POST /api/users/reset-password/:token
// @access  Public
const resetPassword = async (req, res) => {
  try {
    // Get hashed token
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    })

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" })
    }

    // Set new password
    user.password = await hashPassword(req.body.password)
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    res.status(200).json({ message: "Password reset successful" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Get all users (admin only)
// @route   GET /api/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password")
    res.json(users)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Delete user (admin only)
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    await user.remove()
    res.json({ message: "User removed" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Update user role (admin only)
// @route   PUT /api/users/:id/role
// @access  Private/Admin
const updateUserRole = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    user.role = req.body.role

    const updatedUser = await user.save()

    res.json({
      message: "User role updated",
      user: {
        id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        role: updatedUser.role,
      },
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

module.exports = {
  register,
  verifyEmail,
  resendVerification,
  login,
  getUserProfile,
  updateUserProfile,
  forgotPassword,
  resetPassword,
  getUsers,
  deleteUser,
  updateUserRole,
}
