const authorsModel = require('../models/authorsModel');
// const bookModel = require('../models/bookModel');
const booksModel = require('../models/booksModel');
const { all } = require('../routes/route');
// const booksModel = require('../models/booksModel')

const createNewAuthor = async function(req,res){
    const reqAuthor =req.body;
    const SavedData = await authorsModel.create(reqAuthor)
    res.send({msg : SavedData})
}


const createNewBook = async function(req,res){
    const reqBook = req.body;
    const saved = await booksModel.create(reqBook)
    res.send({msg : saved})
}

const allBooks = async function (req,res){
    const authorDetails = await authorsModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const booksName = await booksModel.find({author_id: id}).select({name:1})
    res.send({msg : booksName})
}

const updatedBookPrice = async function(req,res){
    const bookDetails = await booksModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorN =await authorsModel.find({author_id:id}).select({author_name:1,_id:0})
    const bkName = bookDetails[0].name
    const UpdatedPrice =await booksModel.findOneAndUpdate({name:bkName},{price:100},{new:true}).select({price:1,_id:0})
    res.send({msg:authorN,UpdatedPrice})




}
const authorsName = async function(req,res){
    const booksId = await booksModel.find({price:{$gte:50,$lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)

    let temp =[]
    for (let i=0;i<id.length;i++){
        let x= id[i]
        const author = await authorsModel.find({author_id:x}).select({authorName:1,_id:0})
        temp.push(author)
    }
    const authorName = temp.flat()
    res.send({msg: authorName})
}

module.exports.createNewAuthor = createNewAuthor
module.exports.createNewBook=createNewBook
module.exports.allBooks=allBooks
module.exports.updatedBookPrice=updatedBookPrice
module.exports.authorsName=authorsName