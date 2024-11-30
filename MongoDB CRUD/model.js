const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    }
});

const userModel=mongoose.model("CRUD",userSchema);

module.exports=userModel;