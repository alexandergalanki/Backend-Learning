const express=require('express');
const app=express();
const port =3000;

function userValidation(req,res,next){
    const userName=req.headers.username;
    const password=req.headers.password;
    if(userName !="bobby" || password !="password"){
        res.json({"msg":"invalid user"})
    }else{
        next();
    }
}
function kidneyValidation(req,res,next){
    const kidneyId=req.query.k;
    if(kidneyId !=1 && kidneyId!=2){
        res.json({
            "msg":"Inputs are wrong"
        })
    }else{
        next();
    }

}
app.get("/health", userValidation, kidneyValidation,function(req,res){
    res.json({"msg":"kidney are fine"})
});
app.listen(port);