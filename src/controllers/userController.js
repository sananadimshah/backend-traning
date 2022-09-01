const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
//======================================Create User================================//
const createUser = async function (req, res) {
    try {
        let data = req.body;
        let savedData = await userModel.create(data);
        res.status(201).send({ msg: savedData });
    }
    catch (err) {
        console.log("This is the error:", err.message)
        res.status(400).send({ msg: "BAD REQUEST" })

    }
}
//======================================loginUser=============================//
const login = async function (req, res) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;
        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user)
            return res.status(400).send({
                status: false,
                msg: "username or the password is not corerct",
            });

        let token = jwt.sign(
            {
                userId: user._id.toString(),
                batch: "thorium",
                organisation: "FunctionUp",
            },
            "functionup-plutonium-very-very-secret"
        );
        res.setHeader("x-auth-token", token);
        res.status(201).send({ status: true, token: token });
    }
    catch (err) {
        console.log("This is the error:", err.message)
        res.status(500).send({ msg: "BAD REQUEST" })
    }
}
//========================================getUserData===========================//


const getUserData = async function (req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails) {
            return res.status(404).send({ status: false, msg: "No such user exists" });
        }
        else

            res.status(201).send({ status: true, data: userDetails });
    }
    catch (err) {
        console.log("This is the error:", err.message)
        res.status(500).send({ msg: "BAD REQUEST" })
    }
}
//=========================================updateUser===========================//


const updateUser = async function (req, res) {
    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).send("No such user exists");
        }

        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
        res.status(201).send({ status: updatedUser, data: updatedUser });
    }
    catch (err) {
        console.log("This is the error:", err.message)
        res.status(500).send({ msg: "BAD REQUEST" })
    }
}
//===========================================Delected=============================//


const isDeleted = async function (req, res) {
    try {
        let userId = req.params.userId;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
        res.status(201).send({ status: true, data: updatedUser });
    }
    catch (err) {
        console.log("This is the error:", err.message)
        res.status(400).send({ msg: "BAD REQUEST" })
    }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.login = login;
module.exports.isDeleted = isDeleted;

