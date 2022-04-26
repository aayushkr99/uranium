const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const AssignmentController = require("../controllers/assignmentController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getByDistrict",CowinController.getDistrictSession)

router.get("/getWeatherLondon",AssignmentController.getWeatherLondon)
router.get("/getWeatherPlaces",AssignmentController.getWeatherPlaces)
router.get("/getTempLondon",AssignmentController.getTempLondon)
router.get("/getSortedCities",AssignmentController.getSortedCities)

router.get("/allMemes",AssignmentController.allMemes)
router.post("/Memes",AssignmentController.getMemesId)
router.post("/memes",AssignmentController.memes)


//  efc511b2aa9336fad7ba071fa0e4dd36
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;