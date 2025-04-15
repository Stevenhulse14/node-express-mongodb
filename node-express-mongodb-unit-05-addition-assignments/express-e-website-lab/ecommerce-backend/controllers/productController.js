const Product = require("../models/Product")

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, images } = req.body

    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      images: images || [],
    })

    res.status(201).json(product)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const pageSize = 10
    const page = Number(req.query.page) || 1
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {}

    const category = req.query.category ? { category: req.query.category } : {}

    const count = await Product.countDocuments({ ...keyword, ...category })
    const products = await Product.find({ ...keyword, ...category })
      .limit(pageSize)
      .skip(pageSize * (page - 1))

    res.json({
      products,
      page,
      pages: Math.ceil(count / pageSize),
      total: count,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.json(product)
  } catch (err) {
    console.error(err)

    // Handle invalid ObjectId format
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, images } = req.body

    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    // Update fields
    product.name = name || product.name
    product.description = description || product.description
    product.price = price || product.price
    product.category = category || product.category
    product.stock = stock !== undefined ? stock : product.stock
    product.images = images || product.images

    const updatedProduct = await product.save()

    res.json(updatedProduct)
  } catch (err) {
    console.error(err)

    // Handle invalid ObjectId format
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    await product.remove()

    res.json({ message: "Product removed" })
  } catch (err) {
    console.error(err)

    // Handle invalid ObjectId format
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(500).json({ message: "Server error", error: err.message })
  }
}

// @desc    Get product categories
// @route   GET /api/products/categories
// @access  Public
const getProductCategories = async (req, res) => {
  try {
    const categories = await Product.distinct("category")
    res.json(categories)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error", error: err.message })
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductCategories,
}
