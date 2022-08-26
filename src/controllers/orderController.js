const orderModel=require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");



const createOrder = async (req, res) => {
    let userId = req.body.userId
    let productId = req.body.productId
    let freeUser = req.isFreeAppUser
    //userId and productId Must be required in req.body
    if(!req.body.userId || !req.body.productId) return res.send({msg: "userId and productId is required"})

    //user validation
    let user = await userModel.findById(userId)
   if(!user)  return res.send({message: "User doesn't exist. Please provide a valid userId"})

    //product validation
    let product  = await productModel.findById(productId)
   if(!product)  return res.send({message: "Product doesn't exist. Please provide a valid productId"})
   
   
    let userbalance = await userModel.findOne({_id: req.body.userId}).select('balance')
    let productPrince = await productModel.findOne({_id: req.body.productId}).select('price')
    //Paid app user
    if(!freeUser && userbalance.balance >= productPrince.price){
        let newBalance = userbalance.balance - productPrince.price
        let orderData = await orderModel.create({
            userId: req.body.userId,
            productId: req.body.productId,
            amount: productPrince.price,
            isFreeAppUser: false
        })
        await userModel.findOneAndUpdate({_id: req.body.userId}, {balance: newBalance})
        res.send({msg: orderData})
    }

     //user balance validation
    if(!freeUser && userbalance.balance < productPrince.price) return res.send({msg: "insufficient balance"})
   
    //Free app user
    if(freeUser){
        let orderData = await orderModel.create({
            userId: req.body.userId,
            productId: req.body.productId,
            amount: 0,
            isFreeAppUser: true
        })
        res.send({msg: orderData})
    }
}


module.exports.createOrder=createOrder