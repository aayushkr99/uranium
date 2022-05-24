const mongoose = require("mongoose")
const moment = require("moment")
const ObjectId = mongoose.Schema.Types.ObjectId


let date = moment().format('YYYY-MM-DD');
console.log(date)


const bookSchema = new mongoose.Schema({


    title: {type: String, required : true , unique : true, trim : true},
    bookCover:{type:String, required:true, unique:true},
    excerpt: {type : String, required : true , trim :true}, 
    userId: { type : ObjectId, required : true, ref : "User"},
    ISBN: {type:String, required : true, unique : true , trim : true},
    category: {type :String, required : true, trim : true},
    subcategory: {
        type: [String],
        required: true,
        trim : true
    },
    reviews: {type: Number, default: 0,trim :true},      // comment: "Holds number of reviews of this book"},
    deletedAt: {type: Date,   default: null},   
    isDeleted: {type :Boolean, default: false},
    releasedAt: {type:String, required : true}
  

},{timestamps : true})

module.exports = mongoose.model('Bookaws',bookSchema)