const mongoose=require('mongoose')

const bookSchema2= new mongoose.Schema({

    AuthorID: {
        type: Number,
        required: true},
        Name: String,
       Price: Number,
      Rating: Number,
}, 

{timestamps: true} )

module.exports = mongoose.model( 'Book2', bookSchema2 ) 