const express = require('express');
const _ = require('underscore')
const lodash = require('lodash')
const wasu = require('../logger/logger')
const wasudev = require('../util/helper')
const wasu1 = require('../validator/formatter')
// const wasu2 = require('../lodash/lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    wasu.welcome()
    wasudev.printDate()
    wasudev.getBatchInfo()
    wasudev.printMonth()
    console.log(wasu1.case1)
    console.log(wasu1.case2)
    console.log(wasu1.case3)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let nameMonth = ["Jan","Feb","March","April","May","Jun","July","August","Sep","Oct","Nov","December"]
    const chunk = lodash.chunk(nameMonth, 3);
    console.log(chunk);

    const oddNo = [1,3,5,7,9,11,13,15,17,19]
    const tail = lodash.tail(oddNo);
    console.log(tail);

    const arr1 = [1,3,5,7]
    const arr2 = [1,3,8,7]
    const arr3 = [1,3,9,7]
    const arr4 = [1,10,5,7]
    const arr5 = [1,3,5,11]
    const mixarr = lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log(mixarr);

    const a = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    const b = lodash.fromPairs(a)
    console.log(b);


    res.send('API is working!')
   
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason