const authorModel= require("../models/authorModel.js")
const bookmodel2=require('../models/bookmodel2')
const mongoose= require("mongoose")

//  assignment Problem 1
const createAuthor = async function (req, res) {
    const Author= req.body
    let savedAuthor= await authorModel.create(Author)
        res.send({msg: savedAuthor})
         }  
//  assignment Problem 2
const ChetanBhagat= async function (req, res) {
    let ChetanBhagatBook= await authorModel.findOne( { AuthorName: "Chetan Bhagat" })
    let getChetanBhagatbook=await bookmodel2.find({AuthorID: {$eq:ChetanBhagatBook.AuthorID}}) 
    res.send({msg: getChetanBhagatbook})
     }  

module.exports.createAuthor= createAuthor
module.exports.ChetanBhagat= ChetanBhagat