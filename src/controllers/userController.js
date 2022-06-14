const userDocument= require("../models/userDocument")




const createUser = async function(req, res) {
    const data = req.body
    const userDetail = await userDocument.create(data);
    res.send({msg: userDetail})
    
    }



module.exports.createUser = createUser
