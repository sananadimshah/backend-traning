const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
// //List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const getBookList= async function (req, res) {
    let authorID = await AuthorModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    let allBookList= await BookModel.find(authorID)
    res.send({msg:allBookList})
}

// //find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const findAuthor= async function (req, res) {
    let bkprice= await BookModel.findOneAndUpdate(
        { name: "Two States"} , 
        { $set: {price:100}},
        { new: true } 
    )
     let updateprice= bkprice.price;
     let authorupdate = await AuthorModel.findOne({author_id:{$eq : bkprice.author_id}}).select({author_name:1,_id:0})
     res.send({msg:authorupdate , updateprice })
    
    }
// find the books between 50 to 100 reponds back their authors name
const bookInRange= async function (req, res) {
    let allBooks = await BookModel.find({price : {$gte : 50 , $lte : 100}})
    let value = allBooks.map(x => x.author_id);
    let NewBooks = await AuthorModel.find({author_id : value}).select({author_name : 1, _id : 0})
    res.send(NewBooks)

}
module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getBookList= getBookList
module.exports.findAuthor= findAuthor
module.exports.bookInRange= bookInRange

