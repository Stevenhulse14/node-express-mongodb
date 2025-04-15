const jwt = require("jsonwebtoken")
const User = require("../models/User")

const protect = async (req, res, next) => {
  let token
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from database (exclude password)
      req.user = await User.findById(decoded.id).select("-password")

      if (!req.user) {
        return res.status(401).json({ message: "User not found" })
      }

      next()
    } catch (err) {
      console.error(err)
      res.status(401).json({ message: "Not authorized, token failed" })
    }
  } else {
    res.status(401).json({ message: "No token found" })
  }
}

// Check if user is verified
const isVerified = (req, res, next) => {
  if (req.user && req.user.isVerified) {
    next()
  } else {
    res.status(403).json({ message: "Email not verified" })
  }
}

// Check if user is admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next()
  } else {
    res.status(403).json({ message: "Admin access required" })
  }
}

module.exports = { protect, isVerified, admin }
