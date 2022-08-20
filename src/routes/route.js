const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//1 
router.post("/createAuthor", authorController.createAuthor  )
//2
router.post("/createPublisher",publisherController.createPublisher)
//3
router.post("/createBook", bookController.createBook  )
//4
router.get("/getBooksData", bookController.getBooksData)
//5
router.put("/updateBooks",bookController.updateBooks)
//6
router.put("/updatePrice",bookController.updatePrice)




//----------------------------------------------------------------------------------//











module.exports = router;