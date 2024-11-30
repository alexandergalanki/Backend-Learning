const mongoose=require("mongoose");

const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://admin:Bobby%401475@cluster0.qubrjbi.mongodb.net/CodeWithKG");
} 

module.exports=connectDB;