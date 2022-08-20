const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")


//1// create books and check all the validation
const createBook= async function (req, res) {
    let book = req.body
    if(!book.authorId) return res.send("authorId is required")// check authorId present or not in req.body
    if(!book.publisherId) return res.send("publisherId is required")//check publisherId present or not in req.body
    let checkAuthorId= await authorModel.findById(book.authorId)// check author valid or not
    if(!checkAuthorId) return res.send("authorId is not present in the author collection")
    let checkPublisherId =await publisherModel.findById(book.publisherId)//check publisher valid or not
    if(!checkPublisherId) return res.send("publisherId is not present in the publisher collection")
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

//2//get all books with author details and pubisher details.
const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('authorId').populate('publisherId')
    res.send({data: books})
}

//3//new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

const updateBooks= async function (req, res) {
    let findPublisher= await publisherModel.find({name:{$in:["Penguin","HarperCollins"]}})
    let findPublisherId= findPublisher.map(x =>x._id)
    let updateBook= await bookModel.updateMany(
        {publisherId:findPublisherId},
        {$set:{isHardCover:true}},
        {new:true}
    )
    res.send(updateBook)
}

//4// For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 

const updatePrice = async function (req, res) {
    let findAuthor= await authorModel.find({rating:{$gt:3.5}})
    let findAuthorId= findAuthor.map(x =>x._id)
    let updatedBookPrice =await bookModel.updateMany(
        {authorId:findAuthorId},
        {$inc:{price:10}},
        {new:true}
    )
   res.send(updatedBookPrice)
}


//----------------------------------------------------------------------------------//


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks=updateBooks
module.exports.updatePrice=updatePrice

