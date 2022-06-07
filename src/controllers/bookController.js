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
    let init = req.body.year
    let getBooksInyear= await BookModel.find( {year:init}, {isPublished:true} ).select({bookName:1, _id:0})
    res.send({msg: getBooksInyear})
}

const getParticularBook=  async function (req, res) {
    let input = req.body
    let getParticularBook = await BookModel.find(input )
    res.send({msg: getParticularBook})
}
const getXINRBooks=  async function (req, res) {
    let getXINRBooks= await BookModel.find({"prices.indianPrice":{$in:["INR100", "INR200", "INR500"]}} )
    res.send({msg: getXINRBooks})
}
const getRandomBooks=  async function (req, res) {
    let getRandomBooks= await BookModel.find({$or:[{stockAvailaible:true},{totalPages:{$gt:500}}]} )
    res.send({msg: getRandomBooks})
}

module.exports.createBook= createBook
module.exports.getBookList= getBookList
module.exports.getBooksInyear= getBooksInyear
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
module.exports.getParticularBook= getParticularBook