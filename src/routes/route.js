const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const ProductController= require("../controllers/productController")
const Middlewares = require ("../middlewares/commonMiddlewares")


//=======================product API============================//
router.post("/createProduct", ProductController.createProduct )

//=======================User API==============================//
router.post("/createUser",Middlewares.mid1,UserController.createUser)

//=======================Order API============================//
router.post("/createOrder", Middlewares.mid1,OrderController.createOrder)

module.exports = router;