const express = require('express');
const router = express.Router();
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )

router.post("/allbookList", BookController.allbookList )

router.post("/bookList", BookController.bookList )

router.post("/getBooksInYear", BookController.getBooksInYear )

router.post("/getParticularBooks",BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.getXINRBooks)

router.post("/getRandomBooks ", BookController.getRandomBooks )

module.exports = router;