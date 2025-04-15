const express = require("express")
const { body } = require("express-validator")
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductCategories,
} = require("../controllers/productController")
const { protect, admin } = require("../middleware/authMiddleware")
const router = express.Router()

// Public routes
router.get("/", getProducts)
router.get("/categories", getProductCategories)
router.get("/:id", getProductById)

// Admin routes
router.post(
  "/",
  protect,
  admin,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("price")
      .isNumeric()
      .withMessage("Price must be a number")
      .isFloat({ min: 0 })
      .withMessage("Price must be greater than 0"),
    body("category").notEmpty().withMessage("Category is required"),
    body("stock")
      .isNumeric()
      .withMessage("Stock must be a number")
      .isInt({ min: 0 })
      .withMessage("Stock must be a non-negative integer"),
  ],
  createProduct,
)

router.put(
  "/:id",
  protect,
  admin,
  [
    body("price")
      .optional()
      .isNumeric()
      .withMessage("Price must be a number")
      .isFloat({ min: 0 })
      .withMessage("Price must be greater than 0"),
    body("stock")
      .optional()
      .isNumeric()
      .withMessage("Stock must be a number")
      .isInt({ min: 0 })
      .withMessage("Stock must be a non-negative integer"),
  ],
  updateProduct,
)

router.delete("/:id", protect, admin, deleteProduct)

module.exports = router
