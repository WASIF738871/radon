const express = require('express')
const router = express.Router()
const authorController = require('../controllers/authorController')
const blogController = require('../controllers/blogController')
const middleware = require('../middlewares/auth')

router.post('/authors',authorController.createAuthor )

router.post('/login',authorController.loginAuthor )

router.post('/blogs', middleware.authentication, blogController.createBlog )

router.get('/blogs', middleware.authentication, blogController.getBlogs )

router.put('/blogs/:blogId', middleware.authentication, middleware.authorization, blogController.updateBlogs)

router.delete('/blogs/:blogId', middleware.authentication, middleware.authorization, blogController.deleteBlogByPathParam)

router.delete('/blogs',  middleware.authorizationForQuery,  blogController.deleteBlogsByQuery)
// middleware.authentication,

module.exports=router;

