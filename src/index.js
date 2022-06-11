const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');

const { default: mongoose } = require('mongoose');
const app = express();  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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


mongoose.connect("mongodb+srv://WASIF321:Ansari738871@wasifdatabase.wdcjr.mongodb.net/auBoPu-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
