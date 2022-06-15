const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const authMiddleware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts",authMiddleware.authenticate,authMiddleware.authorise, userController.postMessage)

router.put("/users/:userId",authMiddleware.authenticate,authMiddleware.authorise, userController.updateUser)
router.put("/users/:userId/puts",authMiddleware.authenticate,authMiddleware.authorise, userController.deleteUser)


module.exports = router;