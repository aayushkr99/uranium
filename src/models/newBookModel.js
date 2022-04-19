const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId // extra step


const bookN = new mongoose.Schema({

    name: String,
    author: {
        type: ObjectId,
        ref: 'NewAuthor'
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: 'NewPublisher'
    },
    // isHardCover : {
    //     type : Boolean,
    //     default : false
    // }

}, { timestamps:true }
)
module.exports = mongoose.model('NewBook', bookN)

