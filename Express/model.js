const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    },
    photoUrl:{
        type:String,
        default:""
    },
    about:{
        type:String,
        default:"Default Description"
    },
    skills:{
        type:[String],
    }
});

const User=mongoose.model("DevTinderUsers",userSchema);

module.exports=User;