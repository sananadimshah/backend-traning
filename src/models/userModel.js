const mongoose = require('mongoose');



const bookSchema = new mongoose.Schema( {
    bookName: "string",
    authorName: "string",
    Category: "string",
    year: "Number"
}, { timestamps: true });
    /*bookName: {
        type : String,
        unique : true,
        required : true
    },
    author: {
        type : String,
        unique : true,
        required : true
    },
    category: {
        type : String,
        enum : ["self-help", "triller","fantasy","comedy","science fiction"]
    },
    year : {
        type : String,
        unique : true,
        required : true
    },*/


module.exports = mongoose.model('Book', bookSchema) 