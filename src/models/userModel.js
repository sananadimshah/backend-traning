const mongoose = require('mongoose');



const NovelSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        unique : true,
        required : true
    },
    author: {
        type : String,
        unique : true,
    },
    Category: {
        type : String,
    },
    year : {
        type : String,
        unique : true,
        required : true
    }
}, { timestamps: true });

module.exports = mongoose.model('Note', NovelSchema) 