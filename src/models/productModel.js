// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10},
    
// // {
// // 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// // 	name:"Catcher in the Rye",
// // 	category:"book",
// // 	price:70 //mandatory property
// // }
```
    summary :  mongoose.Schema.Types.Mixed,
    isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

// }, { timestamps: true });


//  module.exports = mongoose.model('Book', bookSchema) //user
