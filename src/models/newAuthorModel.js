const mongoose = require('mongoose')


const authorNSchema = new mongoose.Schema({

    authorName: String,
    age: Number,
    address: String,
    rating: Number
},{timestamps:true}
)

module.exports = mongoose.model('NewAuthor', authorNSchema)