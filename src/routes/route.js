const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWareAuth = require("../middleWare/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId",middleWareAuth.validator, userController.updateUser)
router.put("/deleteUsers/:userId",middleWareAuth.validator, userController.deleteUser)

module.exports = router;