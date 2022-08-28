

const mid1 = function (req, res, next) {
    let isFreeUser = req.headers.isfreeappuser
    if (!isFreeUser) {
        res.send({ msg: "The request is missing a mandatory header" })
    }
    else {
        req.isFreeAppUser = isFreeUser;
        next()
    }
}
module.exports.mid1 = mid1



