const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    balance: { type: Number,
        default: 100
    },
    address: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    isFreeAppUser: Boolean
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users

