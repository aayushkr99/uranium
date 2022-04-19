const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const allController = require("../controllers/allController")
// const popController = require("../controllers/popController")
const classController = require("../controllers/classController")


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createNBatch", classController.createNBatch)

router.post("/createNDevelop",classController.createNdevelop)

router.get("/getFemCan",classController.getFemCan)

// router.get("/developers",classController.developers)

router.get("/developers1",classController.developers1)

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/createNewAuthor", allController.createNewAuthor )

// router.post("/createNewBook",allController.createNewBook)

// router.get("/allBooks",allController.allBooks)

// router.get("/updatedBookPrice",allController.updatedBookPrice)

// router.get("/authorsName",allController.authorsName) 

// router.post("/createNAuthor",popController.createNAuthor)

// router.post("/createNPublisher",popController.createNPublisher)

// router.get("/getauthoen",popController.getauthoen)

// router.get("/createSBook",popController.createSBook)

// router.post('/createNBook',popController.createNBook)

// router.get("/getBooksWithAuthorDetails",popController.getBooksWithAuthorDetails)

// router.put("/books/:name",popController.hardCover)

// router.post("/getAuthorId",popController.getAuthorId)

// router.get("/crtAuthorId",popController.crtAuthorId)



// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;