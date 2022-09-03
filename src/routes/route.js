const express = require('express');
const router = express.Router();
// const memController= require("../controllers/memController")
const CowinController= require("../controllers/cowinController")
// const tempController= require("../controllers/tempController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getDistrictsById", CowinController.getDistrictsById)
// router.get("/getWeathers", CowinController.getWeathers)
// router.get("/getmem", CowinController.getmem)




// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;