const express=require("express");
const app=express();
const userModel=require("./model");
const connectDB=require("./mongoose");
const port=3000;

app.post("/createData",async (req,res)=>{
    console.log("Api hit");
    const userDetail={
        firstName:"Bobby",
        lastName:"Galanki",
        email:"codewithKG@kg.com"
    };
    const user=await new userModel(userDetail);
    user.save();

    res.send("api hit");
});

app.get("/userDetails",async(req,res)=>{
    const user=await userModel.findOne({firstName:"Bobby"});
    res.send(user._id);
})

app.put("/updateDetails",async(req,res)=>{
    try{
        const user=await userModel.findOne({firstName:"Bobby"},{lastName:"CodewithKG"});
        res.send("Data update");
    }catch(err){
        res.send(err.message);
    }
})

app.delete("/deleteData",async(req,res)=>{
    try{
        const user=await userModel.findOneAndDelete({firstName:"Bobby"});
        res.send("user deleted");
    }catch(err){
        res.send(err.message);
    }
})

connectDB()
.then(()=>{
    console.log("Database Connected");
    app.listen(port,(req,res)=>{
        console.log("server started on port 3000");
    });
});
