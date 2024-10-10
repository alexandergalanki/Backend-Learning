const mongoose=require("mongoose");

const ConnectDb=async()=>{
    await mongoose.connect("mongodb+srv://admin:Bobby%401475@cluster0.qubrjbi.mongodb.net/DevTinder");
}



module.exports=ConnectDb;
  

