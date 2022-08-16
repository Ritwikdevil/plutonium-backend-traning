const bookmodel = require("../models/bookmodel")

const createBook = async function (req, res) {
    let bookData = req.body
    let savedData = await bookmodel.create(bookData)
    res.send({ msg: savedData })
}

const getBooks = async function (req, res) {
    let allBooks = await bookmodel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allBooks })
}
const getBooksInYear = async function (req, res) {
    let bookInYear = await bookmodel.find({ year: req.body.year })
    res.send({ msg: bookInYear })
}

const ParticularBooks = async function (req, res) {
    let ParticularBooks = await bookmodel.find(req.body)
    res.send({ msg: ParticularBooks })
}

const INRBooks = async function (req, res) {
    let allBooks = await bookmodel.find({ 'prices.indianPrice': { $in: ["100INR", "200INR", "500INR"] } })
    res.send({ msg: allBooks })
}

const RandomBooks = async function (req, res) {
    let allBooks = await bookmodel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] })
    res.send({ msg: allBooks })
}

module.exports.createBook = createBook
module.exports.getBooks = getBooks
module.exports.getBooksInYear = getBooksInYear
module.exports.ParticularBooks = ParticularBooks
module.exports.INRBooks = INRBooks
module.exports.RandomBooks=RandomBooks
