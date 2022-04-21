const User1Model = require("../models/User1Model")




const mid1 = function(req,res,next){
    if(req.headers["isfreeappuser"] === undefined){
        res.send({ error : " Header should be present"})
    } else if(req.headers["isfreeappuser"] === 'true'){
        req.isfreeappuser = true
        next();
    } else if(req.headers[" isfreeappuser"] === 'false'){
        req.isfreeappuser = false
        next();
    } else {
        res.send({ error : " isfreeappuse can be either true or false"})
    };
}

module.exports.mid1 = mid1





// const middleFolder = async function (req, res, next) {
//     let add = req.socket.remoteAddress
//     let dates = new Date()
//     let newLink = req.originalUrl
//     console.log(add, dates, newLink)
//     next()
// }



// const mid = async function (req, res, next) {
//     // let data = req.body
//     // let value = req.headers.isfreeappuser
//     let free = req.headers.isfreeappuser
//     // console.log(value)
//     if (!free) {
//         return res.send("request is missing")
//     } else
//         next()
// }


// module.exports.middleFolder = middleFolder
// module.exports.mid = mid
