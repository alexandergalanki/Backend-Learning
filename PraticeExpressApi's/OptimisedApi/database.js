const mongoose=require('mongoose');

const connectDb=async ()=>{
    await mongoose.connect("mongodb+srv://admin:Bobby%401475@cluster0.qubrjbi.mongodb.net/devMatch");
} 

module.exports= connectDb;