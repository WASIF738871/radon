const jwt = require('jsonwebtoken')
const blogModel = require('../models/blogModel')
const authorController = require('../controllers/authorController')
const urlValidator = require('url-validator')

const authentication = async function (req, res, next) {
    try {

        let token = req.headers["x-api-key" || "X-Api-Key"]

        if (!token) {
            return res.status(400).send({ status: false, msg: "please send the token" })
        }

        // let finalRightToken = req.rightToken
        // console.log(finalRightToken)

        // if (token != finalRightToken) {
        //     return res.status(400).send({status : false, msg : "token is invalid"})
        // }

        let decodedToken = jwt.verify(token, "WaJaiDhi-radon")

        if (!decodedToken) {
            return res.status(400).send({ status: false, msg: "this token is not valid" })
        }

        req["decodedToken"] = decodedToken
        // req.decodedToken = decodedToken

        next()

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}



const authorization = async function (req, res, next) {
    try {
        var url = urlValidator(req.url)
        console.log(url)
        if(!url){
            return res.status(400).send({status:false, msg:"please enter the path"})
        }
        let validAuthorId = req.decodedToken.authorId
        let id = req.params.blogId

        if (id.length != 24) {
            return res.status(400).send({ status: false, msg: "Please enter proper length of author Id (24)" })
        }


        let checkBlog = await blogModel.findById(id)
        if (!checkBlog) {
            return res.status(404).send({ status: false, msg: "no such blog exists" })
        }
        if (checkBlog.authorId != validAuthorId) {
            return res.status(403).send({ status: false, msg: "Author is not authorized" })
        }

        next()

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

const authorizationForQuery = async function (req, res, next) {

    let data = req.query
    console.log(data)
    // let { authorId, category, tags, subcategory, isPublished } = req.query

    let validAuthor = req.decodedToken.authorId
    console.log(validAuthor)

    if (Object.keys(data).length == 0) {
        return res.status(400).send({ status: false, msg: "please enter a query" })
    }

    // let findAuthorId = await blogModel.find({
    //     authorId: req.decodedToken.authorId, $or: [
    //         { authorId: authorId },
    //         { tags: tags },
    //         { subcategory: subcategory },
    //         { category: category },
    //         { isPublished: isPublished }]
    // }).select({ _id: 0, authorId: 1 })

    // if (!findAuthorId[0]) {
    //     return res.status(404).send({ status: false, msg: "document doesn't exist / you are not authorized" })
    // }
    let loggedInAuthor = await blogModel.find(data)
    console.log(loggedInAuthor)
    let len = loggedInAuthor.length
    console.log(len)
    for (let i = 0; i < len; i++) {
        // if (loggedInAuthor[i].authorId!= validAuthor||undefined){
        //     return res.status(403).send({status: false, msg:"you are not authorized"})
        // }else{
        //     next()
        // }
        if (loggedInAuthor[i].authorId == validAuthor || undefined) {
            // console.log(loggedInAuthor[i].authorId)
            authorToBeSignedIn = loggedInAuthor[i].authorId
            if (authorToBeSignedIn == validAuthor){
                console.log(authorToBeSignedIn)
                next()
            }
            
        } else {
            return res.status(403).send({ status: false, msg: "you are not authorized" })
        }
    }
}


module.exports.authentication = authentication
module.exports.authorization = authorization
module.exports.authorizationForQuery = authorizationForQuery