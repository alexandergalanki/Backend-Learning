const mongoose=require("mongoose");


const userModel=new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password:{
        type:String,
        required: true,
    }
},{
    timestamps:true
});

const User=mongoose.model("testPractic", userModel);
module.exports=User;