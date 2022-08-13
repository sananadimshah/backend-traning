const BookModel= require("../models/usermodel")

const createbook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getListofBooks= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

module.exports.createbook= createbook
module.exports.getListofBooks= getListofBooks