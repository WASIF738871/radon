
const jwt = require("jsonwebtoken");

const validator = function (req,res,next){
    let isTokenPresent = req.headers["x-Auth-token"];
  if (!isTokenPresent) isTokenPresent = req.headers["x-auth-token"]
  if (!isTokenPresent) return res.send({msg:"token is not present in the headers"});
  
  
  try{
    let decodedToken = jwt.verify(isTokenPresent, "functionup-radon");
  }
  catch (err) {
    res.send({ status: false, msg: "token is invalid" });
  }
  next();

}








module.exports.validator = validator