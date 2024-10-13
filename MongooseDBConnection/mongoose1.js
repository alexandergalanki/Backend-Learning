const mongoose=require("mongoose");

const ConnectDB=async()=>{
    mongoose.connect("mongodb+srv://admin:Bobby%401475@cluster0.qubrjbi.mongodb.net/HiHi")
};

module.exports=ConnectDB;