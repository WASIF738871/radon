const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookList=   async function (req, res) {
    let getBookList= await BookModel.find().select({bookName: 1, authorName: 1, _id: 0})
    res.send({msg: getBookList})
}
const getBooksInyear=  async function (req, res) {
    let getBookList= await BookModel.find({year:1800,isPublished :true} )
    res.send({msg: getBookList})
}
const getXINRBooks=  async function (req, res) {
    let getXINRBooks= await BookModel.find({$and:[{$and:[{indianPrice:"INR100"},{indianPrice:"INR200"}]},{indianPrice:"INR500"}]} )
    res.send({msg: getXINRBooks})
}
const getRandomBooks=  async function (req, res) {
    let getRandomBooks= await BookModel.find({$and:[{stockAvailaible:true},{totalPages:500}]} )
    res.send({msg: getRandomBooks})
}

module.exports.createBook= createBook
module.exports.getBookList= getBookList
module.exports.getBooksInyear= getBooksInyear
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks