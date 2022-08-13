const express = require('express');
const router = express.Router();
const BookModel= require("../models/usermodel.js")
const UserController= require("../controllers/userController.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbook", UserController.createbook)

router.get("/getListofBooks", UserController.getListofBooks)

module.exports = router;