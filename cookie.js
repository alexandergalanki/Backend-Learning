const express=require("express");
const app=express();
const cookieParser=require('cookie-parser');
const port=3000;

app.use(express.json());
app.use(cookieParser());

app.get("/sendCookie",(req,res)=>{
    //sample cookie
    res.cookie("token","hsg653gh3e3tebj");

});
app.get("/getCookie",(req,res)=>{
    const cookie=req.cookies;
    console.log(cookie);
    
});

