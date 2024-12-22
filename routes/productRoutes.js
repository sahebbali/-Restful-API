const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { auth, role } = require("../middleware/authMiddleware");

router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.post(
  "/products",
  auth,
  role(["Admin"]),
  productController.createProduct
);
router.put(
  "/products/:id",
  auth,
  role(["Admin"]),
  productController.updateProduct
);
router.delete(
  "/products/:id",
  auth,
  role(["Admin"]),
  productController.deleteProduct
);

module.exports = router;
