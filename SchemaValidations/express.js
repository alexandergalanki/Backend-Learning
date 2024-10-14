const mongoose=require("mongoose");
const express=require ("express");
const app=express();
const connectDB=require("./mongoose");
const User=require("./model");
const port=3000;

app.use(express.json());

app.post("/signup",async (req,res)=>{
    try{
    const {firstName,lastName,email,password}=req.body;
    console.log(email);
    const createUser=new User(req.body);
    await createUser.save();
    res.status(200).send("Signed Up Success");
    }catch(err){
        res.status(400).send(err.message);
    }
})


connectDB().then(()=>{
    console.log("Database Connected");
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`);
    })
})

