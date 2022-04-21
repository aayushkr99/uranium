const mongoose = require("mongoose")
// const moment = require('moment')

const ObjectId =  mongoose.Schema.Types.ObjectId
// const date = new Date();
// const todayDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
 

const OrderSchema = new mongoose.Schema({

    userId:{
        type: ObjectId,
        ref: "Alluser"

    },
	productId: {
        type: ObjectId,
        ref: "Product"

    },
	amount: Number,
	isFreeAppUser:{
        type:Boolean,
        default:false
    }
    // date : {
    //     type : String,
    //     default : todayDate
    // }
    //  date: moment().format("DD/MM/YYYY")
},{timestamps: true})
module.exports = mongoose.model('NewOrder',OrderSchema)




