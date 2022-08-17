
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const allbookList= async function (req, res) {
        let allBooks= await BookModel.find()
        res.send({msg:allBooks})
}

const BookList= async function (req, res) {
        let data= req.body
        let Book= await BookModel.find(data).select({ bookname : 1,author : 1, _id:0})
        res.send({msg:Book})
}
const getBooksInYear= async function (req, res) {
        year = req.query.year
        let BooksInYear= await BookModel.find({year:{$eq:year}})
        res.send({msg:BooksInYear })
}
const getParticularBooks=async function (req, res) {
        let data= req.body
        let ParticularBooks= await BookModel.find(data)
        res.send({msg: ParticularBooks})
}
const getXINRBooks= async function (req, res) {
        let  XINRBooks= await BookModel.find({priceindianPrice:{$in :["100INR","200INR","500INR"]}})
        res.send({msg:XINRBooks })
}
const getRandomBooks= async function (req, res) {
        let RandomBooks = await BookModel.find($0r[{stockAvailable :true},{pages :{$gt : 500}}])
        res.send({msg: RandomBooks})
}






module.exports.createBook= createBook
module.exports.allbookList=allbookList
module.exports.BookList= BookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks