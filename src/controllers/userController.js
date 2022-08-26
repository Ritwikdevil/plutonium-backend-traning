const userModel= require("../models/userModel.js")


const createUser= async function (req, res) {
    let user= req.body
    user.isFreeAppUser = req.isFreeAppUser
    let savedData= await userModel.create(user)
    res.send({msg: savedData})    
    }
 



   

module.exports.createUser= createUser
