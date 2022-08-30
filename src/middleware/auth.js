const jwt = require("jsonwebtoken");
  //If no token is present in the request header return error. This means the user is not logged in.
  //using try -catch and HTTP status code.
  //middleware function 1
const authMid = function(req, res, next){
  try{
    let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];
if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
//  console.log(token)
next();
  }
catch(error)
{
  res.status(500).send(error.message)
}

}
  //middleware function 2
// using try -catch and HTTP status code.
const authorise = async function (req, res, next) {
  try{
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-plutonium-Ritwik-secret-key");
  if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is invalid" });
  let userId = req.params.userId;
  let decordDetails = decodedToken.userId
  if (userId != decordDetails) {
      return res.status(403).send("Can't login with this user and not allowed to modify the requested users data.")
  }
  next()
}catch(error){
  res.status(500).send(error.message)
}

}

module.exports = {authMid,authorise}
