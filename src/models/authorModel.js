const mongoose= require('mongoose')

const authorSchema= new mongoose.Schema({

    AuthorID: {
        type: Number,
        required: true},
    AuthorName: {
        type: String,
        required: true},
        
    Age: Number,
Address: String,
}, 

{timestamps: true} )


module.exports = mongoose.model( 'Author', authorSchema ) 