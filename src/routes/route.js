const express = require('express');
const router = express.Router();

const abpController= require("../controllers/abpController")
const middlewares= require("../moddlewares/commonMiddleares")

router.post("/createAuthor", abpController.createAuthor)
router.post("/createPublisher", abpController.createPublisher)
router.post("/createBook", abpController.createBook)
router.get("/getBooksWithAuthorDetails", abpController.getBooksWithAuthorDetails)
router.put("/updatePenguin", abpController.updatePenguin)
router.put("/updatePrice", abpController.updatePrice)
router.put("/middleWare", abpController.updatePrice)


module.exports = router;