let axios = require("axios")

let memCreation = async function(req, res){
    try {
        let data = req.query
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${data.meme_id}&text0=${data.text0}&username=${data.username}&password=${data.password}`
        }
        
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }}
    
    module.exports.memCreation = memCreation