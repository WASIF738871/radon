const publisherModel = require("../models/pubisherModel")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let authorDetail = req.body
    let authorCreated = await authorModel.create(authorDetail)
    res.send({data: authorCreated})
}
const createPublisher= async function (req, res) {
    let publisherDetail = req.body
    let publisherCreated = await publisherModel.create(publisherDetail)
    res.send({data: publisherCreated})
}

const createBook = async function(req,res){
    let book = req.body
    let authorId=await authorModel.find().select({_id:1}) 
    authorIdArr=authorId.map((obj)=>{return obj._id.toString()}) 

    
    let publisheId=await publisherModel.find().select({_id:1}) 
    let publishIdArr=publisheId.map((obj)=>{return obj._id.toString()}) 
    
    if (book.author_id!=undefined){  
        if(book.publisher!=undefined){ 
            if (authorIdArr.includes(book.author_id)){ 
                if(publishIdArr.includes(book.publisher)){ 
                    let bookCreated = await bookModel.create(book)
                    return res.send({data: bookCreated})
                }
                return res.send({data: "Invalid Publisher Id"})
            } 
            return res.send({data: "Invalid Author Id"})
        }
         return res.send({data: "Missing Publisher Id"}) 
    }
    return res.send({data: "Missing Author Id"})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})
}
const updatePenguin = async function(req,res){
    let data= await publisherModel.find({name:{$in:["Penguin","HarperCollins"]}}).select({_id:1})
    let arr = data.map((obj)=>obj._id.toString())
    let book = await bookModel.findOneAndUpdate({publisher:{$in:arr}},{$set:{"isHardCover":true}})
    res.send({msg:book})

}
const updatePrice = async function(req,res) {
    let authId = await authorModel.find({rating:{$gt: 3.5}}).select({_id:1})
    let arr = authId.map((obj)=>obj._id.toString())
    let newBook = await bookModel.findOneAndUpdate({author_id:{$in:arr}},{$inc:{"price":+10}},{new:true})
    res.send({msg:newBook})
}

module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher
module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updatePenguin= updatePenguin
module.exports.updatePrice= updatePrice
