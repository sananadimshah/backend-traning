const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    authorname : String,
    age : Number,
    address : String,
    rating: Number,

})

module.exports = mongoose.model('newAuthor', authorSchema) //users



// String, Number
// Boolean, Object/json, array