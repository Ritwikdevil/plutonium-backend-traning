const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/products", productController.createProduct)//create product
router.post("/users", commonMW.headerCheck, UserController.createUser)//create users and headercheck
router.post("/orders", commonMW.headerCheck, orderController.createOrder)//create orders and headercheck





module.exports = router;