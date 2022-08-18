const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController")
const bookmodel = require('../models/bookmodel')
const bookcontroller = require('../controllers/bookcontroller')
const  bookcontroller2= require('../controllers/bookcontroller2')
const authorController= require('../controllers/authorController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)
router.get("/getUsersData", UserController.getUsersData)



//assignment/mongo-session 2
router.post("/createBook", bookcontroller.createBook)
router.get("/getBooks", bookcontroller.getBooks)
router.post('/getBooksInYear', bookcontroller.getBooksInYear);
router.post('/getParticularBooks', bookcontroller.ParticularBooks);
router.get('/getXINRBooks', bookcontroller.INRBooks);
router.get('/getRandomBooks', bookcontroller.RandomBooks);


// assignment/mongo-session3
router.post('/createAuthor',  authorController.createAuthor  );
router.post('/createBook2',  bookcontroller2.createBook2  );
router.get('/getChetanBhagat',  authorController.ChetanBhagat  );
router.get('/getPriceUpdate',   bookcontroller2.PriceUpdate  );
router.get('/getFindByName',   bookcontroller2.FindByName  );




module.exports = router;