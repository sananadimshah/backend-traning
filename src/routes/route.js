const express = require('express');
const router = express.Router();
const MemController= require("../controllers/memController")
const CowinController= require("../controllers/cowinController")
const tempController= require("../controllers/tempController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getDistrictsById", CowinController.getDistrictsById)
router.post("/getmem", MemController.memCreation)
router.get("/weather/london",tempController.weather)
router.get("/tempOfLondon",tempController.tempOfLondon);
router.get("/tempOfCities",tempController.tempOfCities);




module.exports = router;