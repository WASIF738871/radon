const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    category:{
        type:String,
        required:true,
        
    },
    author:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    year:{
        type:Number
    }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array