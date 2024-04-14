const express = require('express')
const { createProduct, getProducts, getSingleProduct, deleteProduct, updateProduct } = require('../controllers/product')
const router = express.Router()


router.post("/createProduct",createProduct)
router.get("/products",getProducts)
router.get("/products/:id",getSingleProduct)
router.delete("/products/:id",deleteProduct)
router.patch("/products/:id",updateProduct)

module.exports = router