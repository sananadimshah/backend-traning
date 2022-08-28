const { count } = require("console")
const OrderModel = require("../models/orderModel")
const UserModel = require("../models/userModel")
const ProductModel = require("../models/productModel")


const createOrder = async function (req, res) {
    let data = req.body
    let userId = data.userId
    let productId = data.productId
    let UserId = await UserModel.findById(userId)
    let ProductId = await ProductModel.findById(productId)
    if (!UserId) {
        return res.send({ msg: "Please enter valid UserId" })
    } else if (!ProductId) {
        return res.send({ msg: "Please enter valid ProductId" })
    } else { }

    let order = req.headers.isfreeappuser
    let val = 0
    //is for freeAppUser 
    if (order === true) {
        data.amount = val
        data.isFreeAppUser = order
        let savedData = await OrderModel.create(data)
        res.send({ data: savedData })

    } //if user isFreeAppUser Is False
    else if (UserId.balance >= ProductId.price) {
        await UserModel.findOneAndUpdate({ _id: UserId },
            { $set: { balance: UserId.balance - ProductId.price } })
        data['amount'] = ProductId.price
        data['isFreeAppUser'] = req.headers.isfreeappuser
        let savedData = await OrderModel.create(data)
        res.send({ data: savedData })

    } else {
        res.send("insufficint Balance")
    }
}


module.exports.createOrder = createOrder
