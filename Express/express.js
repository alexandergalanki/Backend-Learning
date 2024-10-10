const express=require("express");
const app=express();
const ConnectDb=require("./mongoose")
const port=3000;
const User=require("./model");

app.use(express.json());
app.post("/signup",async (req,res)=>{
    //console.log(req.body);   
    // const userObj={
    //     firstName:"Bobby",
    //     lastName:"Galanki"
    // }
    try{
        const user=new User(req.body);
        await user.save();
        res.send("User added")
    }catch(err){
        res.status(400).send(err.message);
    }

});
app.get("/userDetails",async (req,res)=>{
    const userName=req.body.lastName;
    try{
        const user=await User.find({lastName:userName});

        res.send(user);
    }catch(err){
        res.status(400).send("Something Went wrong")
    }
})
app.get("/userDetails",async (req,res)=>{
    const userName=req.body.firstName;
    try{
        const user=await User.findOne({firstName:userName});

        res.send(user);
    }catch(err){
        res.status(400).send("Something Went wrong")
    }
})
app.delete("/delete",async (req,res)=>{
    const userId=req.body.userId;
    try{
        const user=await User.findByIdAndDelete(userId);
        res.send("user deleted");
    }catch(err){
        res.status(400).send("internal Server error");
    }
});
//Update data of the user
app.patch("/patch",async(req,res)=>{
    const userId=req.body.userId;
    const data=req.body;
    try{
        const user=await User.findByIdAndUpdate({_id:userId},data,{returnDocument:"before"});
        console.log(user);
        res.send("User updated");
    }catch(err){
        res.status(400).send("Internal server error");
    }

})

ConnectDb()
    .then(()=>{
        console.log("Database Connected");
        app.listen(port,()=>{
            console.log("App listening on port - 3000");
            
        });
    }).catch((err)=>{
        console.log(err);
    })
