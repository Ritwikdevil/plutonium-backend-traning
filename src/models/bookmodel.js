const mongoose=require('mongoose')

const bookSchema= new mongoose.Schema({
    bookName: {
        type:String,
        unique:true,
        required:true
   },
    authorName:String,
    tags: [ String ],
    prices: {
        indianPrice: String,
        europeanPrice: String,
    },
    year: {type:Number,
        default:2021},

        totalPages: Number,
        stockAvailable:Boolean

},{timestamps: true});

module.exports=mongoose.model('book',bookSchema)