const bookmodel2 = require("../models/bookmodel2")
const authorModel = require('../models/authorModel')
const mongoose = require("mongoose")

// assignment Problem 1
const createBook2 = async function (req, res) {
    const Book2 = req.body
    let savedBook2 = await bookmodel2.create(Book2)
    res.send({ msg: savedBook2 })
}

//  assignment Problem 3
const PriceUpdate = async function (req, res) {
    let PriceUpdateBook = await bookmodel2.findOneAndUpdate({ Name: "Two states" }, { Price: 100 }, { new: true })
    let priceofbook = await bookmodel2.findOne({ Name: "Two states" }).select({ Price: 1, _id: 0 })
    let getauthorname = await authorModel.findOne({ AuthorID: { $eq: PriceUpdateBook.AuthorID } }).select({ AuthorName: 1, _id: 0 })
    res.send({ msg: [priceofbook, getauthorname] })
}

//  assignment Problem 4
const FindByName = async function (req, res) {
    let findbook = await bookmodel2.find({ price: { $gte: 50, $lte: 100 } })
    let findAuthor = findbook.map(x => x.AuthorID)
    let result = await authorModel.find({ AuthorID: findAuthor}).select({ AuthorName: 1, _id: 0 })
    res.send({ msg: result})
}

module.exports.createBook2 = createBook2
module.exports.PriceUpdate = PriceUpdate
module.exports.FindByName = FindByName