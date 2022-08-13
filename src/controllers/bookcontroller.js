const bookmodel=require("../models/bookmodel")

const createBook=async function(req,res){
    let bookData=req.body
    let savedData=await bookmodel.create(bookData)
    res.send({msg: savedData})
}

const getBooks=async function(req,res){
    let allBooks= await bookmodel.find()
    res.send({msg:allBooks})
}

module.exports.createBook=createBook
module.exports.getBooks=getBooks