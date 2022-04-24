const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth =require("../middleWare/auth")
// const auth = require("../mi")
// const { verify, JsonWebTokenError } = require("jsonwebtoken")
// const jwt = require("jsonwebtoken");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/users",userController.createUser  )


router.post("/login",userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",auth.Verification,userController.getUserData)

router.put("/users/:userId",auth.Verification,userController.updateUser)

router.delete("/users/:userId",auth.Verification,userController.deleteUser)

module.exports = router;