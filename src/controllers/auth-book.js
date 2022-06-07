const { count } = require("console")
const authorsModel= require("../models/authorsModel")
const booksModel= require("../models/booksModel")



//  getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }const

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks

const createAuthor= async function (req, res) {
    let data= req.body
    let authorList= await authorsModel.create(data)
    res.send({msg: authorList})
}
const createBooks= async function (req, res) {
    let data= req.body
    let bookList= await booksModel.create(data)
    res.send({msg: bookList})
}

const chetanBhagat= async function (req, res) {
    let findId= await authorsModel.find({author_name:"Chetan Bhagat"}).select({author_id:1})
    let bookList= await booksModel.find({author_id:findId[0].author_id})
    res.send({msg: bookList})
}

const updatePrice= async function (req, res) {
    let bookup= await booksModel.findOneAndUpdate({bookName:"Two states"},{$set:{price:100}},{new:true})
    let authName = await authorsModel.find(bookup[author_id]).select({author_name:1})
    let prices = bookup.price
    res.send({msg:authName,prices})
}

const bookNew = async function(req, res){
    let bookRange = await BookModel.find({price:{$lte:50, $gte:100}}).select({ author_id :1})
    let arr = []
    for (let i=0; i<bookRange.length ; i++){
        let authorName = await AuthorModel.findOne({author_id: bookRange[i].author_id}).select({author_name:1, author_id:1, _id:0})
        arr.push(authorName)
    }
    res.send({msg:arr})
    
}





module.exports.createAuthor= createAuthor
module.exports.createBooks= createBooks
module.exports.chetanBhagat= chetanBhagat
module.exports.updatePrice= updatePrice
module.exports.bookNew= bookNew