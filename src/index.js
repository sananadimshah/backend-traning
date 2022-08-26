const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment =require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://functionupsana:99zr3eE9dRQ62e8a@cluster0.1d0h0gc.mongodb.net/functionupsana?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use (
    function (req, res, next) {
        let currenttimestamp = moment().format("YYYY-MM-DD hh-mm-ss")
        let userIP = req.ip
        let routelocation = req.originalUrl
        console.log(currenttimestamp+"  , "+userIP+" , "+routelocation);
        next();
  }
  )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
