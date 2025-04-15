const express = require("express")
const { body } = require("express-validator")
const { getUserCart, addToCart, updateCartItem, removeFromCart, clearCart } = require("../controllers/cartController")
const { protect, isVerified } = require("../middleware/authMiddleware")
const router = express.Router()

// All cart routes are protected
router.use(protect)
router.use(isVerified)

router.get("/", getUserCart)

router.post(
  "/",
  [
    body("productId").notEmpty().withMessage("Product ID is required"),
    body("quantity").optional().isInt({ min: 1 }).withMessage("Quantity must be at least 1"),
  ],
  addToCart,
)

router.put("/:itemId", [body("quantity").isInt({ min: 1 }).withMessage("Quantity must be at least 1")], updateCartItem)

router.delete("/:itemId", removeFromCart)
router.delete("/", clearCart)

module.exports = router
