const mongoose = require('mongoose')

// const ObjectId = new mongoose.Schema.Types.ObjectId

const UsersSchema = new mongoose.Schema({


    name: String,
    balance: {
        type: Number,
        default: 100,
    }, // Default balance at user registration is 100
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    }, // Allowed values are - “male”, “female”, “other”
    isFreeAppUser: {
        type: Boolean,
        default: false
    }

    // Default false value.
}, { timestamps: true })

module.exports = mongoose.model('Alluser', UsersSchema)

