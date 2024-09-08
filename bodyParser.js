const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const port =3000;

app.use(express.json());

app.post("/data",(req,res)=>{
    const body=req.body;
    console.log(body);
})

app.listen(port);