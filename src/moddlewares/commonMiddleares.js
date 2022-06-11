const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const dateIpRout = function (req,res,next){
    const today = new Date();
    const timeStamps = today.getFullYear()+"-"
                      +(today.getMonth()+1)+"-"
                      +today.getDate()+"  "
                      +today.getHours()+":"
                      +today.getMinutes()+":"
                      +today.getSeconds()
    
    const ip = req.ip;
    const url = req.url
    // const url = req.originalUrl                  

     console.log(timeStamps+" , "+ip+" , "+url)
    // console.log( `${timeStamps} ${ip} ${url}` )
    next();
}

app.use(dateIpRout);

