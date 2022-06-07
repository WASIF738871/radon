const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
        bookName:{
            type:String,
            required:true
        },
        author_id:{
            type:Number,
            required:true
        },
        price:Number,
        ratings:Number

    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('book', booksSchema) //users



// String, Number
// Boolean, Object/json, array