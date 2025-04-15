const nodemailer = require("nodemailer")
const crypto = require("crypto")

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Generate verification token
const generateVerificationToken = () => {
  return crypto.randomBytes(32).toString("hex")
}

// Send verification email
const sendVerificationEmail = async (user, verificationToken) => {
  const verificationUrl = `${process.env.BASE_URL}/api/users/verify/${verificationToken}`

  const message = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
    to: user.email,
    subject: "Email Verification",
    html: `
      <h1>Email Verification</h1>
      <p>Hello ${user.username},</p>
      <p>Please verify your email by clicking the link below:</p>
      <a href="${verificationUrl}">Verify Email</a>
      <p>If you did not request this, please ignore this email.</p>
    `,
  }

  await transporter.sendMail(message)
}

// Send password reset email
const sendPasswordResetEmail = async (user, resetToken) => {
  const resetUrl = `${process.env.BASE_URL}/reset-password/${resetToken}`

  const message = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
    to: user.email,
    subject: "Password Reset",
    html: `
      <h1>Password Reset</h1>
      <p>Hello ${user.username},</p>
      <p>You requested a password reset. Please click the link below to reset your password:</p>
      <a href="${resetUrl}">Reset Password</a>
      <p>If you did not request this, please ignore this email.</p>
      <p>This link will expire in 1 hour.</p>
    `,
  }

  await transporter.sendMail(message)
}

module.exports = {
  generateVerificationToken,
  sendVerificationEmail,
  sendPasswordResetEmail,
}
