let axios = require("axios")

// [
//     { city: "London", temp: 280 },
//     { city: "Moscow", temp: 290 },
//     { city: "Bangalore", temp: 301.2 }
// ]

// const getsortedCities = async function (req, res) {
//     let cities =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
//     let array = []
//     for (i=0;i<cities.length;i++){
//         let obj = { array : cities [i]}
//         let resp = await axious .get (`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=35fa5ecbc9f7917f38bdfd5381bf5fa1`)

//         obj.temp = resp.data.main.temp
//         array.push(obj)
//         let sorted = array.sort(function )

    
//     }


// }


let getWeathers = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let  result = await axios(options)
        // let  result2 = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`)
        let temp = result.data.main['temp']
        console.log(temp)
        res.status(200).send({ temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeathers = getWeathers
