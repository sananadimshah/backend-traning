
const mid1 = function (req, res, next) {
    let token = req.headers.x-auth-token
    if (!token) {
        res.send({ msg: "The request is missing a mandatory header" })
    }
    else {
        req.isFreeAppUser = token;
        next()
    }
}
module.exports.mid1 = mid1
