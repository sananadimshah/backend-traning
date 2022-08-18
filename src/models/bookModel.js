const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookname: String, 
    price : Number,
    rating : Number,
    author_id : {
        type :Number,
        require : true}
}, { timestamps: true });


module.exports = mongoose.model('BookA', bookSchema) //users
