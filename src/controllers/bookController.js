const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1,_id:0})
    console.log(allBooks)
    res.send({msg: allBooks})
}

const getBooksInYear= async function(req,res){
    let yr = req.body.year
    let allBooks = await BookModel.find({year: yr})
    res.send({msg: allBooks})
}
 const getXINRBooks = async function(req,res){
     let allBooks = await BookModel.find( { 'prices.indianPrice' :{ $in:["100","200","500"]} } )
     res.send({ msg : allBooks})
 }

 const getRandomBooks = async function(req,res){
     let allBooks = await BookModel.find( { $or :[{stockAvailable : true},{totalPages : {$gt : 500}}]})
     res.send({msg : allBooks})

 }
module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks