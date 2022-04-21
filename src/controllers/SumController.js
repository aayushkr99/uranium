const productModel = require("../models/productModel")
const User1Model = require("../models/User1Model")
const ObjectModel = require("../models/ObjectModel")




const createProducts = async function(req,res){
    let data = req.body
    let savedData = await productModel.create(data)
    res.send({msg : savedData})
}


const createUser1 = async function (req,res){
    let data = req.body
    let savedData = await User1Model.create(data)
    res.send({ msg : savedData})
}


const createorder = async function(req,res){
    let data = req.body
    let user = data.userId
    let product = data.productId

    let user1 = await User1Model.findById(user)
    // let product1 = await productModel.findById(product)
    if (!user1) {
        return res.send({message :" Invalid user id"})
    }
    let product1 = await productModel.findById(product)
    if ( !product1){
        return res.send({ message : " Invalid productId"})

    }
    if (req.isFreeAppUser){
        data.amount = 0 ;
        data.isFreeAppUser = req.isFreeAppUser
        let newOrder = await ObjectModel.create(data)
        res.send({ msg :  newOrder})
    }
    else {
        let productPrice = await productModel.findById({_id : data.productId}).select({price : 1 , _id : 0})
        let productPrice1 = productPrice.price
        let balance = await User1Model.findById({_id : data.userId})
        if (productPrice1 <= balance.balance){
            let userBalance = await User1Model.findOneAndUpdate(
                {_id : data.userId},
                {$inc : {balance: - productPrice1}},
                {new : true}
            )
            data.amount = productPrice1
            data.isFreeAppUser =req.isFreeAppUser
            let orderCreated = await ObjectModel.create(data)
            res.send({msg : orderCreated})
        }
        else {
            res.send({ error : " Insufficient balance"})
        }
    }
}

    // let free = req.headers.isfreeappuser
    // console.log(free)
    // if(free){
    //     let saved = await User1Model.create(data)
    //     res.send({msg : saved})
    // } else {
    //     res.send(" missing header, header is compulsory")
    // }


// const objectDoc = async function(req,res){
//     let data = req.body
//     let savedData =await ObjectModel.create(data)
//     res.send({ msg: savedData})
// }
//     let free = req.headers.isfreeappuser
//     let data1 = req.body.userid
//     let data2 =req.body.productid 
//   if( !data1==true || !data2 == true){
//       return res.send({msg: "one of the validation fails, please check again"})
//   } else if ( free== true){
//       let getData= await ObjectModel.findAndUpdate()
      
  

  

 


// const createorder = async function(req,res,)



    // let value = req.headers.isfreeappuser
    // console.log(value)
//     let savedData = await User1Model.create(data)
//     res.send({msg: savedData})
// }


// const createObj = async function(){
//     let data = req.body
//     let savedData = await ObjectModel.create(data)
//     res.send({msg: savedData})
// }
  


module.exports.createProducts = createProducts
module.exports.createUser1 = createUser1
module.exports.createorder = createorder
// module.exports.createObj = createObj