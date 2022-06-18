let axios = require("axios");
const { query } = require("express");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getSessionAvailable = async function (req, res) {
    try {
        let id = req.query.district_id;
        let date = req.query.date;
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: "error", error: err.message })
    }
}

const londonTemp = async function (req, res) {
    try {

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=34ca009cba4386f0f164e61f64ef3316`,
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data.main.temp, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: "error", error: err.message })
    }
}

const sortCitiesByTemp = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let sortedArrofObj = [];
        for (let index = 0; index < cities.length; index++) {
            let obj = { city: cities[index] };
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[index]}&appid=34ca009cba4386f0f164e61f64ef3316`,
            }
            let result = await axios(options)
            obj.temp = result.data.main.temp
            sortedArrofObj.push(obj)
        }
        const sortedArray = sortedArrofObj.sort(function(a ,b){return a.temp-b.temp})
        res.status(200).send(sortedArrofObj)
    }
    catch (err) {
        res.status(500).send({ msg: "error", error: err.message })
    }
}

const getMeme = async function (req, res) {
    try {
        let memeId = "131087935";
        let text0 = "hahahahahahaahahaha..............................";
        let text1 = "Kaise bachoge mere hanthon se jab tak pakdunga nhi tab tak chorunga nhi";

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`,
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: "error", error: err.message })
    }
}




module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.londonTemp = londonTemp
module.exports.getSessionAvailable = getSessionAvailable
module.exports.sortCitiesByTemp = sortCitiesByTemp
module.exports.getMeme = getMeme;