const Order = require("../models/Order")
const Cart = require("../models/Cart")
const Product = require("../models/Product")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod } = req.body

    // Get user's cart
    const cart = await Cart.findOne({ user: req.user._id }).populate({
      path: "items.product",
      select: "name price stock",
    })

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "No items in cart" })
    }

    // Check if all products are in stock
    for (const item of cart.items) {
      const product = await Product.findById(item.product._id)

      if (!product) {
        return res.status(404).json({
          message: `Product ${item.product.name} not found`,
        })
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `Not enough stock for ${product.name}. Available: ${product.stock}`,
        })
      }
    }

    // Calculate total price
    const orderItems = cart.items.map((item) => {
      return {
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price,
      }
    })

    const totalPrice = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

    // Create order
    const order = await Order.create({
      user: req.user._id,
      items: orderItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
    })

    // Clear cart after order creation
    cart.items = []
    await cart.save()

    // Update product stock
    for (const item of orderItems) {
      const product = await Product.findById(item.product)
      product.stock -= item.quantity
      await product.save()
    }

    res.status(201).json(order)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "username email").populate({
      path: "items.product",
      select: "name images",
    })

    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    // Check if the order belongs to the user or if user is admin
    if (order.user._id.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" })
    }

    res.json(order)
  } catch (err) {
    console.error(err)

    // Handle invalid ObjectId format
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Order not found" })
    }

    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 }).populate({
      path: "items.product",
      select: "name images",
    })

    res.json(orders)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = async (req, res) => {
  try {
    const pageSize = 10
    const page = Number(req.query.page) || 1

    const count = await Order.countDocuments({})
    const orders = await Order.find({})
      .populate("user", "username email")
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1))

    res.json({
      orders,
      page,
      pages: Math.ceil(count / pageSize),
      total: count,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    // Check if the order belongs to the user or if user is admin
    if (order.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" })
    }

    if (order.isPaid) {
      return res.status(400).json({ message: "Order already paid" })
    }

    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } catch (err) {
    console.error(err)

    // Handle invalid ObjectId format
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Order not found" })
    }

    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    if (!order.isPaid) {
      return res.status(400).json({ message: "Order not paid yet" })
    }

    if (order.isDelivered) {
      return res.status(400).json({ message: "Order already delivered" })
    }

    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } catch (err) {
    console.error(err)

    // Handle invalid ObjectId format
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Order not found" })
    }

    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Create Stripe payment intent
// @route   POST /api/orders/:id/create-payment-intent
// @access  Private
const createPaymentIntent = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({ message: "Order not found" })
    }

    // Check if the order belongs to the user or if user is admin
    if (order.user.toString() !== req.user._id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" })
    }

    if (order.isPaid) {
      return res.status(400).json({ message: "Order already paid" })
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(order.totalPrice * 100), // Stripe expects amount in cents
      currency: "usd",
      metadata: {
        orderId: order._id.toString(),
        userId: req.user._id.toString(),
      },
    })

    res.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (err) {
    console.error(err)

    // Handle invalid ObjectId format
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Order not found" })
    }

    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Handle Stripe webhook
// @route   POST /api/orders/webhook
// @access  Public
const handleStripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"]
  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Handle the event
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object

    // Update order status
    const orderId = paymentIntent.metadata.orderId

    try {
      const order = await Order.findById(orderId)

      if (order && !order.isPaid) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
          id: paymentIntent.id,
          status: paymentIntent.status,
          update_time: new Date().toISOString(),
          email_address: paymentIntent.receipt_email,
        }

        await order.save()
        console.log(`Order ${orderId} marked as paid`)
      }
    } catch (err) {
      console.error(`Error updating order: ${err.message}`)
    }
  }

  // Return a 200 response to acknowledge receipt of the event
  res.json({ received: true })
}

module.exports = {
  createOrder,
  getOrderById,
  getMyOrders,
  getOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
  createPaymentIntent,
  handleStripeWebhook,
}
