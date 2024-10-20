const express=require('express');
const app=express();
const connectDb=require("./config/database");
const userModel=require("./models/userModal");
const port=3000;

app.use(express.json());

app.post("/signup",(req,res)=>{
    console.log(req.body);
    const userData=req.body;
    try{
        const data=new userModel(userData);
        data.save();
        res.status(200).send("Sign Up Successfu");

    }catch(err){
        res.status(400).send("Code by humans, expect Errors.")
    }
});
app.get("/userDetails",async (req,res)=>{
    const email=req.body.emailId;
    const user=await userModel.find({emailId:email});
    console.log(user);
    console.log(user[0].id);
    
    res.status(200).json({user});
})
app.delete("/delete",async (req,res)=>{
    try{
        const userId=req.body.userId;
        const deleteUser=await userModel.findByIdAndDelete(userId);
        if(!deleteUser){
            res.send("User Does not exist");
        }else{
            res.send("User delete successful");
        }

    }catch(err){
        res.status(500).send(err);
    }
});

app.patch("/updateUser",async(req,res)=>{
    try{
        const userId=req.body.userId;
        const data=req.body;
        const updateUser=await userModel.findByIdAndUpdate(userId,data,{returnDocument:"before"});
        console.log(updateUser);        
        res.status(200).send("User Updated");
    }catch(err){
        res.status(500).send(err);
    }
});

connectDb().then(()=>{
    console.log("Connected to Database");
    app.listen(port,()=>{
        console.log("Server listening on port 3000");
    });
});

