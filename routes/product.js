const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/auth");
const auth = middleware.auth;

const productController = require("../controllers/Products");


router.post("/create-product",productController.createProduct);
router.get("/get-product",productController.getProduct);

module.exports = router;