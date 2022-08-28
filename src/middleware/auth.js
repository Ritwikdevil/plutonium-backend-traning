
  //If no token is present in the request header return error. This means the user is not logged in.
const authMid = function(req, res, next){
    let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];
if (!token) return res.send({ status: false, msg: "token must be present" });
//  console.log(token);
next();
}

module.exports = authMid;
