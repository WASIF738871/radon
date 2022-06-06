const UserModel= require("../models/bookModel")

const createBookDetail= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createBookDetail= createBookDetail
module.exports.getBookData= getBookData