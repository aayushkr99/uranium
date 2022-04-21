const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const middleWrController = require("../controllers/middleWareCon")
// const middle = require("../controllers/middleWareCon");
const { mid1 } = require('../middleWare/middleWre');
const SumController = require("../controllers/SumController");
// const middle = require('../middleWare/middleWre')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createProducts",SumController.createProducts)

// router.post("/createUser1",middle.mid,SumController.createUser1)

router.post("/createUser1",mid1,SumController.createUser1)

router.post("/createorder",mid1,SumController.createorder)

// router.post("/createObj ",SumController.createObj )

// router.get("/middleWr",middleFolder,middleWrController.middleWr)

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;