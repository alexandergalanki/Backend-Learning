const jwt=require("jsonwebtoken");
const userModel = require("../models/userModal");

const userAuth = async (req,res,next)=>{
    try{
        const cookie=req.cookies;

    const {token}=cookie;
    if(!token){
        throw new Error("Invalid Token") 
    }
    const decodedData=await jwt.verify(token,"devMatch@123");
    const {_id}=decodedData;
    const user=await userModel.findById(_id);
    if(!user){
        throw new Error("user not found");
    }
    req.user=user;
    next();
}catch(err){
    res.send(err.message);
}

}

module.exports={userAuth};