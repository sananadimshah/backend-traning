const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    author_name : String,
    age : Number,
    address : String,
    author_id : {type :Number,
        require : true}
})

module.exports = mongoose.model('AuthorB', authorSchema) //users



// String, Number
// Boolean, Object/json, array