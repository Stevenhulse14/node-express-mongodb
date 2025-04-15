const express = require("express")
const { body } = require("express-validator")
const {
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
} = require("../controllers/userController")
const { protect, admin, isVerified } = require("../middleware/authMiddleware")
const router = express.Router()

// Public routes
router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Please include a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  register,
)

router.get("/verify/:token", verifyEmail)
router.post("/resend-verification", resendVerification)

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please include a valid email"),
    body("password").exists().withMessage("Password is required"),
  ],
  login,
)

router.post("/forgot-password", [body("email").isEmail().withMessage("Please include a valid email")], forgotPassword)

router.post(
  "/reset-password/:token",
  [body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters")],
  resetPassword,
)

// Protected routes
router.get("/profile", protect, getUserProfile)
router.put("/profile", protect, updateUserProfile)

// Admin routes
router.get("/", protect, admin, getUsers)
router.delete("/:id", protect, admin, deleteUser)
router.put("/:id/role", protect, admin, updateUserRole)

module.exports = router
