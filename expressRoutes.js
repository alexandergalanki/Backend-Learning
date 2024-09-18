const express=require("express");
const app=express();
const port=3000;

app.use("/",(req,res)=>{

    res.json({
        msg:""
    })
});

app.get("/",(req,res)=>{

    res.json({
        msg:""
    })
});

app.post("/",(req,res)=>{

    res.json({
        msg:""
    })
});

app.listen(port);
