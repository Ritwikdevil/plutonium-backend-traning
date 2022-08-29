const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const {authMid, authorise}=require("../middleware/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )//register a user from the user details in request body.

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",authMid,authorise, userController.getUserData)

router.put("/users/:userId",authMid,authorise ,userController.updateUser)

router.delete("/users/:userId",authMid,authorise, userController.deleteUser)

module.exports = router;