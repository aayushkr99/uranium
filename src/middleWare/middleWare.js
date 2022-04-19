const middleFolder = async function(req,res,next){
    let add = req.socket.remoteAddress
    let dates = new Date()
    let newLink = req.originalUrl
    console.log(add , dates , newLink)
    next()
}

module.exports.middleFolder=middleFolder

