// const { verify, JsonWebTokenError } = require("jsonwebtoken")
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// const userModel = require("../models/userModel")


// const userVerification = async function(req,res,next){
//     let userId = req.params.userId
//     let users = await userModel.findById(userId)
//     if(!users) return res.send( " invalid user id ")
//     next()
// }

const Verification = async function(req,res,next){
    try {
    let token = req.headers["x-Auth-token"]
    let userId = req.params.userId
    if (!token) {token = req.headers["x-auth-token"]}
    if (!token) {return res.status(404).send({ status : false , msg : 'token is compulsory'})}

    let decodedToken = jwt.verify(token,"functionup-uranium")
    if(!decodedToken) return res.status(400).send({ status : false, msg: "Invalid token"})

    if(decodedToken.userId !== userId){
        return res.status(401).send({status : false, msg : 'Not Authorized'})
    }
    let user = await userModel.findOne({_id : userId})
    if(user.isDeleted == true){
        return res.status(404).send({status : false, msg : "account is deleted"})
    }

    next();
}
catch (err){
    console.log('error', err.message)
    res.status(500).send({ msg :"error", error : err.message})
}




}



// module.exports.userVerification = userVerification
// module.exports = tokenVerification
module.exports.Verification = Verification