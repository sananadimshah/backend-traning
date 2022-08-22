
const bookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const PublisherModel = require("../models/publisherModel")


//In this api, you have to write a logic that validates the following :
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.

const createBook = async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    if (!authorId) {
        return res.send("This detail is required")
    }
    if (!publisherId) {
        return res.send("This detail is required")
    }
    let validauthorId = await AuthorModel.findById(authorId)
    if (!validauthorId) {
        return res.send("The author is not present")
    }
    let validpublisherId = await PublisherModel.findById(publisherId)
    if (!validpublisherId) {
        return res.send("The publisher is not present")
    }
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}


    // Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 
    const getBooksWithAllDetails = async function (req, res) {
        let specificBook = await bookModel.find().populate(["author", "publisher"])
        res.send({ data: specificBook })

    }
   //=========================================5===================================//
    // a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

    
const bookpublished = async function (req, res) {
    let allbook = await PublisherModel.find({name :{$in :["Penguin", "HarperCollins"]}})
    let newbook = await bookModel.updateMany(
        ({publisherId:allbook},{$set:{isHardCover:true}})
    )
    res.send({ msg: newbook })
    }
// b)
// For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 
const bookprice = async function (req, res) {
    let rat = await AuthorModel.find({rating :{$gt :3.5}})
    let updatedprice = await bookModel.updateMany(
        {authorId:rat},
        {$inc:{ price :+10}})
        res.send(updatedprice)   
    
}

    // Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 
    const getBooks = async function (req, res) {
        let allBooks = await bookModel.find().populate(["author", "publisher"])
        res.send({ data: allBooks })

    }
    module.exports.createBook = createBook
    module.exports.bookpublished = bookpublished
    module.exports.bookprice = bookprice
    module.exports.getBooks = getBooks
