const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const userController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const commonMiddleWares = require ("../middlewares/commonMiddlewares")


router.post("/createProductDetail",commonMiddleWares.mid1, productController.createProductDetail )
router.post("/createUser",commonMiddleWares.mid2, userController.createUser )
router.post("/orderPurchase",commonMiddleWares.mid3, orderController.orderPurchase )






module.exports = router;