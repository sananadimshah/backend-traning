
const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "shahid",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
           "soccer"
        ],
    },

   ]

   router.post('/players', function (req, res) {

       //LOGIC WILL COME HERE
       let value = req.body
       for (i = 0; i < players.length; i++)
       {
        if(value.name == players[i].name)
        {
            return res.send ("Already Name there in the list")
            
        }
    }
    players.push(value)
       res.send(players)
   })

   // promblem 2
   // change voting age as true also return an array consisting of only hte person that can vote

 let persons = [
     {
     name : "Poonam",
     age : 10,
     votingStatues : false
},
{
     name : "Rakesh",
     age : 70,
     votingStatues : false
},
 {
     name : "Suman",
     age : 20,
     votingStatues : false
},
{
     name : "Pawan",
     age : 5,
     votingStatues : false
},
{    name : "Aman",
     age : 40,
     votingStatues : false
}
 ]
 router.post('/person', function (req, res) {
    let newperson = req.query
    let arr = []
    for (i = 0 ; i < persons.length; i++){
       if(persons[i].age > newperson.votingAge){
       persons[i].votingStatues = true;
       arr.push(persons[i])
      }      
    }
     res.send({data : arr })
 })
 
module.exports = router;


