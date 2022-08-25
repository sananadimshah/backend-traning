const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance: {
        type: Number,
        default: 100
    },
    address: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
}, { timestamps: true });

// { 
//     _id: ObjectId("61951bfa4d9fe0d34da86829"),
//     name: "Sabiha Khan",
// 	balance:100, // Default balance at user registration is 100
// 	address:"New delhi",
// 	age: 90,
//  	gender: “female” // Allowed values are - “male”, “female”, “other”
// 	isFreeAppUser: false // Default false value.
// }
module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array