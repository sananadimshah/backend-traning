
const express = require('express');
const _ = require('lodash')

const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    loggerModule.printInfo()
    formatterModule.trimtext()
    formatterModule.getUpperCasetext()
    formatterModule.changetoLowertext()
    helperModule.TodaysDate()
    helperModule.CurrentMonth()
    helperModule.BatchDetails()

      // split the array inti 4 equally sized sub array using chunk function
      const month = ['January','Febuary','March','April','May','June','July','Augest','Sepetember','October','November','December']
      _.chunk(['Jan','Feb','March','April','May','June','July','Augt','Sep','Oct','Nov','Dec'], 3);
      console.log(month)
  
      // create an array of 10 Odd number using tail function
  
      const OddNumbers = [1 , 3 , 5 ,7 , 9 , 11 , 23 , 27 , 45 , 51]
      _.tail([1 , 3 , 5 ,7 , 9 , 11 , 23 , 27 , 45 , 51]);
      console.log(OddNumbers);
  
     // create 5 array of number few duplicate value using union function 
  
     const value = [[23 ,34] , [4 , 3] , [34, 23] , [4 , 2] , [23 ,45]]
     _.union([23 ,34] , [4 , 3] , [34 , 23] , [4 , 2] , [23 ,45]);
     console.log (value);
  
     // create an object containig key value pair using fromPairs function
      const arr = [['a', 1], ['b', 2], ['c', 3],['d', 4],['e', 5]]
     _.fromPairs([['a', 1], ['b', 2], ['c', 3],['d', 4],['e', 5]]);
       console.log(arr);
       
    res.send('My second ever api!')
});


module.exports = router