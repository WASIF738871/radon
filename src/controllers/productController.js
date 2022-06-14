
const productDocument = require("../models/productDocument")


const createProductDetail= async function (req, res) {
    let data= req.body

    let ProductData= await productDocument.create(data)
    res.send({msg: ProductData})
}








module.exports.createProductDetail = createProductDetail

