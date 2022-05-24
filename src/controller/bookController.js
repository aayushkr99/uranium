
const aws = require("../aws/aws")
const bookModel = require("../model/bookModel")


const createBook = async function(req,res){
    try{
        let data = req.body
        let files = req.files
        
        if(files && files.length>0){
            let uploadedFileURL= await aws.uploadFile( files[0] )
            data.bookCover = uploadedFileURL;
        }
        else{
            res.status(400).send({ msg: "No file found" })
        }
        const book = await bookModel.create(data)
        res.status(201).send({status : true , message : "Book is created successfully", data : book})
    } 
    catch(err){
        console.log(err)
        res.status(500).send({status : false , message : "Server Error"})

    }
}

module.exports.createBook = createBook