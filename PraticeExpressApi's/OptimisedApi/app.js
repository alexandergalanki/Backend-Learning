const express=require('express');
const bcrypt=require('bcrypt');
const userModel=require("./models/userModal");
const cookieParser=require('cookie-parser');
const app=express();
const connectDb=require("./config/database");
const {validateRequest}=require("./utils/validation");
const {userAuth}=require("./Middleware/auth")
const jwt=require('jsonwebtoken');
const port=3000;
 
app.use(express.json());
app.use(cookieParser());

app.post("/signup",async (req,res)=>{ 
    try{
        const userData=req.body;
        validateRequest(userData);
        const {firstName,lastName,emailId,password,age,gender,photoUrl,about,skills}=req.body;
        const passwordHash=await bcrypt.hash(password,10);
        console.log(passwordHash);
        const data=new userModel({
            firstName,
            lastName,
            emailId,
            password:passwordHash,
            age,
            gender,
            photoUrl,
            about,
            skills
        });
        await data.save();
        res.status(200).send("Sign Up Successfu");

    }catch(err){
        res.status(400).send(err.message);
    }
});

app.post("/login",async (req,res)=>{
    try{
        const {emailId,password}=req.body;
        const user=await userModel.findOne({emailId:emailId});
        const checkPassword=await user.validatePassword(password); 
    
        if(checkPassword){
            const token=await user.getJWT();
            console.log(token);
            res.cookie("token",token);
            res.status(200).send("login successfull");
        }else{
            throw new Error("Auth Failed");
        }
    }catch(err){
        res.status(400).send(err.message);
    }

});

app.get("/profile",userAuth,async (req,res)=>{
    try{
        const userLookup=req.user;
        console.log("Logged In user is "+userLookup.firstName+" "+userLookup.lastName);
        res.send(userLookup);
    }catch(err){
        res.status(400).send(err.message);
    }
});

app.get("/userDetails",async (req,res)=>{
    const email=req.body.emailId;
    const user=await userModel.find({emailId:email});
    console.log(user);
    console.log(user[0].id);
    res.status(200).json({user});
})
app.delete("/deleteUser",async (req,res)=>{
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
        const AllowUpdate=["photoUrl","about","gender","age","skills"];
        const isUpdateAllowed=Object.keys(data).every((ke)=>AllowUpdate.includes(ke));
        if(!isUpdateAllowed){
            throw new Error("Update not allowed");
        }
        const updateUser=await userModel.findByIdAndUpdate(userId,data,{
            returnDocument:"before",
            runValidators:true
        });
        console.log(updateUser);        
        res.status(200).send("User Updated");
    }catch(err){
        res.status(500).send(err.message);
    }
});

app.post("/sendConnectionRequest",userAuth,(req,res)=>{
 try{   
    console.log("Sending connection request "+req.user.firstName+" "+req.user.lastName);

    res.send("Sending connection request "+req.user.firstName+" "+req.user.lastName);
}catch(err){
    res.status(500).send(err.message);
}
});

connectDb().then(()=>{
    console.log("Connected to Database");
    app.listen(port,()=>{
        console.log("Server listening on port 3000");
    });
});

