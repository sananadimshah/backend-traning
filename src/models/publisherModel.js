const mongoose = require('mongoose');


const PublisherSchema = new mongoose.Schema({
    name: String,
    headQuarter: String,
    
})

module.exports = mongoose.model('newPublisher', PublisherSchema) //users



// String, Number
// Boolean, Object/json, array