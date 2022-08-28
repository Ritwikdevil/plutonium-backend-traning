const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authMid=require("../middleware/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )//register a user from the user details in request body.

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",authMid, userController.getUserData)

router.put("/users/:userId",authMid, userController.updateUser)

router.delete("/users/:userId",authMid, userController.deleteUser)

module.exports = router;