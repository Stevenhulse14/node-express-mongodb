const express = require("express")
const { body } = require("express-validator")
const {
  createOrder,
  getOrderById,
  getMyOrders,
  getOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
  createPaymentIntent,
  handleStripeWebhook,
} = require("../controllers/orderController")
const { protect, admin, isVerified } = require("../middleware/authMiddleware")
const router = express.Router()

// Special route for Stripe webhook (needs raw body)
router.post("/webhook", express.raw({ type: "application/json" }), handleStripeWebhook)

// Protected routes
router.use(protect)
router.use(isVerified)

router.post(
  "/",
  [
    body("shippingAddress.address").notEmpty().withMessage("Address is required"),
    body("shippingAddress.city").notEmpty().withMessage("City is required"),
    body("shippingAddress.postalCode").notEmpty().withMessage("Postal code is required"),
    body("shippingAddress.country").notEmpty().withMessage("Country is required"),
    body("paymentMethod").notEmpty().withMessage("Payment method is required"),
  ],
  createOrder,
)

router.get("/myorders", getMyOrders)
router.get("/:id", getOrderById)
router.post("/:id/create-payment-intent", createPaymentIntent)
router.put("/:id/pay", updateOrderToPaid)

// Admin routes
router.get("/", protect, admin, getOrders)
router.put("/:id/deliver", protect, admin, updateOrderToDelivered)

module.exports = router
