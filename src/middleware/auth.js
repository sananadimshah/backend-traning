
const jwt = require("jsonwebtoken");

const auth = function (req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret");
  if (!decodedToken) {
    return res.send({ status: false, msg: "token is invalid" });
  }
  let loginUser = decodedToken.userId
  let checkuser = req.params.userId
  if (loginUser !== checkuser)
    res.send({ msg: "invalid User permission denied" })

  next()
}

module.exports.auth = auth

