const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    ProductName:String,
	category:["book","notes"],
	price:{
        type: Number,
        required:true
    } //mandatory property

}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema) //users
