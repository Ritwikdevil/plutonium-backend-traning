const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookmodel=require('../models/bookmodel')
const bookcontroller=require('../controllers/bookcontroller')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)


router.post("/createBook",bookcontroller.createBook)
router.get("/getBooks",bookcontroller.getBooks)

module.exports = router;