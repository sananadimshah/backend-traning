
const jwt = require("jsonwebtoken");

const auth = function (req, res, next) {
try {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  
  if (!token) return res.status(499).send({ status: false, msg: "token must be present" });
  
  console.log(token);
  let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret");
  if (!decodedToken) {
    return res.status(400).send({ status: false, msg: "token is invalid" });
  }
  let loginUser = decodedToken.userId
  let checkuser = req.params.userId
  if (loginUser !== checkuser)
    res.status(403).send({ msg: "invalid User permission denied" })
  
  next()
  }
 catch (error) {
  console.log("This is the error:", err.message)
  res.status(500).send({ msg: "BAD REQUEST" })
}
}


module.exports.auth = auth