const mongoose = require('mongoose')


const publisherN = new mongoose.Schema({

    name: String,
    headQuarter: String


},{timestamps:true}
)

module.exports= mongoose.model('NewPublisher', publisherN)