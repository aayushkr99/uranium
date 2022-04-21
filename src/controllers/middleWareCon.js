

 const middleWr = async function(req,res){
    // let display = "you are correct"
    res.send({msg : "You are correct"})
}

// const mid = async function(req,res,next){
//     // let data = req.body
//     let value = req.headers.isfreeappuser
//     console.log(value)
//     if(!value){
//         res.send("header is not present")
//     }
//     next()
// }

module.exports.middleWr = middleWr
// module.exports.mid=mid