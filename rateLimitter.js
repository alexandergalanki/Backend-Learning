// const express=require("express");
// const app=express();
// const port=3000;

// let userObj={};
// setInterval(() => {
//     userObj={};
// }, 5000);

// app.use(function(req,res,next){
//     let userCount=req.headers["userid"];
//     if(userObj["userid"]){
//         userObj["userid"]=userObj["userid"]+1;
//         console.log(userObj["userid"]);
//         if(userObj["userid"]>5){
//             res.status(411).send("chalu inka")
//         }else{
//             next();
//         }
//     }else{
//      userObj["userid"]=1;
//      next();
//     }
// })

// app.get("/users",function(req,res){
//     res.json({
//         msg:"hi user"
//     })
// })
// app.listen(port);
let user={};
user["userid"]=1
console.log(user);
if(user["userid"]){
    console.log(typeof user.userid);
}else{
    console.log("hi");
}