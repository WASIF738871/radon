const express = require('express');
const nodemon = require('nodemon');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})



const moviesList = ['Rang de basanti','Lhe shining','Lord of the rings','Batman begins']

router.post("/movies", function(req, res) {
    
    console.log(moviesList);
    res.send({data:moviesList})
})


router.get("/movies/:indexNumber", function(req, res) {

    
    
const moviesList = ['Rang de basanti','Lhe shining','Lord of the rings','Batman begins']

    if ((req.params.indexNumber < moviesList.length)){
        var movieName = moviesList[req.params.indexNumber]
    }else{
        movieName = "his not a part of movie list"
    }
    
    res.send(  { movie:movieName , status: true } )
})





router.get("/films", function(req, res) {
    const films=[{
        "id":1,
        "name":"the shining"
    },
    {
     "id":2,
     "name":"incendies"
    },
    {
     "id":3,
     "name":"rang de basanti"
    },
    {
     "id":4,
     "name":"finding nemo"
    }]
    res.send(  { data: films , status: true }  )
})


router.get("/films/:filmId" , function(req, res) {

    const films=[{
        "id":1,
        "name":"the shining"
    },
    {
     "id":2,
     "name":"incendies"
    },
    {
     "id":3,
     "name":"rang de basanti"
    },
    {
     "id":4,
     "name":"finding nemo"
    }]
    let ids = req.params.filmId
    if(req.params.filmId <= films.length){
        for (let i = 0; i < films.length; i++) {
        
            if (req.params.filmId == films[i].id){
                var filmName = films[i]
            }
    }
         
     }else{
        var filmName = "id is not valid"
    }
    res.send({data:filmName, status:true})
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})


router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

module.exports = router;