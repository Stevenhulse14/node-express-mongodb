const Cart = require("../models/Cart")
const Product = require("../models/Product")

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
const getUserCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate({
      path: "items.product",
      select: "name price stock images",
    })

    if (!cart) {
      // Create empty cart if none exists
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      })
    }

    res.json(cart)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body

    // Validate product exists and has enough stock
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    if (product.stock < quantity) {
      return res.status(400).json({ message: "Not enough stock available" })
    }

    // Find user's cart
    let cart = await Cart.findOne({ user: req.user._id })

    // Create cart if it doesn't exist
    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [{ product: productId, quantity }],
      })

      cart = await cart.populate({
        path: "items.product",
        select: "name price stock images",
      })

      return res.status(201).json(cart)
    }

    // Check if product already in cart
    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId)

    if (itemIndex > -1) {
      // Product exists in cart, update quantity
      const newQuantity = cart.items[itemIndex].quantity + quantity

      if (product.stock < newQuantity) {
        return res.status(400).json({ message: "Not enough stock available" })
      }

      cart.items[itemIndex].quantity = newQuantity
    } else {
      // Product not in cart, add it
      cart.items.push({ product: productId, quantity })
    }

    await cart.save()

    // Populate product details
    cart = await cart.populate({
      path: "items.product",
      select: "name price stock images",
    })

    res.status(200).json(cart)
  } catch (err) {
    console.error(err)

    // Handle invalid ObjectId format
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Update cart item quantity
// @route   PUT /api/cart/:itemId
// @access  Private
const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body
    const { itemId } = req.params

    // Validate quantity
    if (!quantity || quantity < 1) {
      return res.status(400).json({ message: "Quantity must be at least 1" })
    }

    // Find user's cart
    let cart = await Cart.findOne({ user: req.user._id })

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" })
    }

    // Find item in cart
    const itemIndex = cart.items.findIndex((item) => item._id.toString() === itemId)

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" })
    }

    // Get product to check stock
    const productId = cart.items[itemIndex].product
    const product = await Product.findById(productId)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    // Check if enough stock
    if (product.stock < quantity) {
      return res.status(400).json({ message: "Not enough stock available" })
    }

    // Update quantity
    cart.items[itemIndex].quantity = quantity
    await cart.save()

    // Populate product details
    cart = await cart.populate({
      path: "items.product",
      select: "name price stock images",
    })

    res.json(cart)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Remove item from cart
// @route   DELETE /api/cart/:itemId
// @access  Private
const removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.params

    // Find user's cart
    let cart = await Cart.findOne({ user: req.user._id })

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" })
    }

    // Find item in cart
    const itemIndex = cart.items.findIndex((item) => item._id.toString() === itemId)

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" })
    }

    // Remove item
    cart.items.splice(itemIndex, 1)
    await cart.save()

    // Populate product details
    cart = await cart.populate({
      path: "items.product",
      select: "name price stock images",
    })

    res.json(cart)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Clear cart
// @route   DELETE /api/cart
// @access  Private
const clearCart = async (req, res) => {
  try {
    // Find user's cart
    const cart = await Cart.findOne({ user: req.user._id })

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" })
    }

    // Clear items
    cart.items = []
    await cart.save()

    res.json({ message: "Cart cleared", cart })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

module.exports = {
  getUserCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
}
