
const orderDocument= require("../models/orderDocument")

const orderPurchase= async function (req, res) {
    let orderData = req.body
    let orderDetail= await orderDocument.create(orderData)
    let userId = orderData["userId"];
    let productId = orderData["productId"];
    if(userId && productId){
        res.send({Data: orderDetail})
    }else{
        res.send({msg: "error, you have purchased already or validation failed" })
    }
}

module.exports.orderPurchase= orderPurchase;
