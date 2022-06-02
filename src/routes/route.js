const express = require('express');
const wasu = require('../logger/logger')
const wasudev = require('../util/helper')
const wasu1 = require('../validator/formatter')

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

router.get('/test-me1', function (req, res) {

    res.send('My second ever api!')
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