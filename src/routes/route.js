const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const moudle1=require('../logger/logger')
const Module2=require('../util/helper')
const moudle3=require('../validator/formatter')


//problem-1

// router.get('/test-me', function (req, res) {
//     moudle1.welcome()
//     // abc.printName()
//     res.send('My 1st ever api!')

// });

//problem-2

// router.get('/test-me', function(req, res){
//     Module2.printdate()
//     Module2.printMonth()
//     Module2.getBatchInfo()
//     res.send('My 2nd ever api!')
    
// })

// problem-3

// router.get('/test-me', function(req, res){
//     moudle3.trimname()
//     res.send('My 3rd ever api!')

// })

// done problems

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason