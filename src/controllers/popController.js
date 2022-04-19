const newAuthorModel = require('../models/newAuthorModel')
const newPublisherModel = require('../models/newPublisherModel')
const newBookModel = require('../models/newBookModel');
// const bookModel = require('../models/bookModel');




const createNAuthor = async function (req, res) {      // question 1 starts from here
    const reqAuthor = req.body;
    const SavedData = await newAuthorModel.create(reqAuthor)
    res.send({ msg: SavedData })
}

const createNPublisher = async function (req, res) {       // question 2 starts from here
    const reqPublisher = req.body;
    const SavedData = await newPublisherModel.create(reqPublisher)
    res.send({ msg: SavedData })
}

// const getauthoen = async function (req, res) {          
//     let allaut = await newAuthorModel.find()
//     res.send({ msg: allaut })
// }


// const createSBook = async function (req,res){
//     let data = req.data;
//     let a_check = await newAuthorModel.find({_id: data.author}).select("_id")
//     let b_check = await newPublisherModel.find({_id: data.publisher}).select("_id")

//     if(!a_check.length && !b_check.length)
//     res.send({msg:"Author and Publisher id not present in our data ,invalid"})
//     else if(!a_check && b_check.length)
//     res.send({msg:"Author id doesnot present in our data, invalid"})
//     else if(a_check.length && !b_check.length)
//     res.send({msg:"publisher field doesnot present in our data, invalid"})
//     else{
//         if(!await newBookModel.exists(req.body)){
//             let savedData = await newBookModel.create(req.body)
//             res.send({msg:savedData})
//         } else res.send({msg:"this book is already exist in the collection"})
//     }

// }


const createNBook = async function (req, res) {       // question 3 starts here
    let data = req.body

    if (data.author && data.publisher) {
        let authIdCheck = await newAuthorModel.exists({ _id: data.author })
        let publIdCheck = await newPublisherModel.exists({ _id: data.publisher })
        if (authIdCheck && publIdCheck) {
            if (!await newBookModel.exists(data)) {
                let bookCreated = await newBookModel.create(data)
                res.send({ msg: bookCreated })
            } else res.send({ msg: "book already exists" })
        }
        else res.send("AuthorId and PublisherId both or any one of these are Invalid")
    }
    else res.send({ msg: "Author and Publisher Must be Present" })
}


const getBooksWithAuthorDetails = async function (req, res) {           // question 4 starts here
    let uniqueBook = await newBookModel.find().populate('author')//.populate('publisher')
    res.send({ data: uniqueBook })
}


const hardCover = async function (req, res) {
    let data = req.params.name
    let publisherId = await newPublisherModel.findOne({ name: data }).select({ _id: 1 })
    let updateBook = await newBookModel.updateMany(
        { publisher: publisherId },
        { $set: { isHardCover: true } }
    )

    let authorId = await newAuthorModel.find({rating : {$gt : 3.5}})
    let updatePrice = await newBookModel.updateMany(
        {author : authorId},
        {$inc : {price :10}}
    )


    res.send({ msg: updateBook , updatePrice })
}

// module.exports.createNAuthor = createNAuthor
// module.exports.createNPublisher = createNPublisher
// // module.exports.getauthoen = getauthoen
// // module.exports.createSBook = createSBook
// module.exports.createNBook = createNBook
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
// module.exports.hardCover = hardCover
// module.exports.getAuthorId = getAuthorId
// module.exports.crtAuthorId = crtAuthorId