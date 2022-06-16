const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  
try{
  let data = req.body
  if (Object.keys(data).length != 0){
  let savedData = await userModel.create(data);
  xyz.status(201).send({ msg: savedData });
  }else{
    xyz.status(400).send({msg :"Bad request"})
  }
}
catch(err){
  xyz.status(500).send({msg :"error", error : err.message})
}
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  try{if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });}
  catch(err){
    res.status(500).send({msg :"error", error : err.message})
  }
};

const getUserData = async function (req, res) {
  

  
 try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
   if (!token) return res.status(500).send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.status(401).send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(403).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}
catch (err){
  res.status(500).send({msg :"error", error: err.message})
}
};

const updateUser = async function (req, res) {


  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(201).send({ status: updatedUser, data: updatedUser });
};

const postMessage = async function (req, res) {
    let message = req.body.message
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    return res.status(201).send({status: true, data: updatedUser})
}

const deleteUser = async function(req, res) {    
  let userId = req.params.userId
  let user = await userModel.findById(userId)
  if(!user) {
      return res.send({status: false, message: "no such user exists"})
  }
  let updatedUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
  res.status(200).send({status: true, data: updatedUser})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser
