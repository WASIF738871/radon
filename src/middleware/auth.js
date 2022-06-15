const jwt = require("jsonwebtoken")



const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({status : false ,msg : "token is not present in the headers"});

    const decodedToken = jwt.verify(token,"functionup-radon")
    if (!decodedToken) return res.send({status : false , msg:"token is not valid"});

    next();
}


const authorise = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    const decodedToken = jwt.verify(token,"functionup-radon")
    let userToBeModified = req.params.userId
   
    let userLoggedIn = decodedToken.userId

    
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    next();
}




module.exports.authenticate = authenticate;
module.exports.authorise = authorise;


