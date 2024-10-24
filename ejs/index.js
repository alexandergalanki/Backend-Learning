const ejs = require('ejs');
const express=require('express');
const app=express();
const path=require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/profile/:name/:age",(req,res)=>{
    const userName=req.params.name;
    const userAge=req.params.age;    
    res.send(`Hi Welcome, ${userName} and age is ${userAge}`);
})

app.listen(3000,(res)=>{
    console.log("Running");
});

