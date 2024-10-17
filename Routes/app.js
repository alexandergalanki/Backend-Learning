const express=require('express');
const app=express();
const port=3000;

//abc //ac
app.get("ab?c",(req,res)=>{

})
//abbbbbbbbc
app.get("ab+c",(req,res)=>{

})
//ab"anything in between"cd
app.get("ab*cd",(req,res)=>{

})
//bc is optional
app.get("a(bc)?d",(req,res)=>{

})
//abcbdcbdbcd will work
app.get("a(bc)+d",(req,res)=>{

})
// /a works
// /b will not work
// /cab works (a is present)
app.get(/a/,(req,res)=>{

})
//starts with anything and if it ends with a fly it will work
app.get(/.*fly$/,(req,res)=>{

})

app.get("/user",(req,res)=>{
    res.status(200).json({
        firstName:"Bobby",
        lastName:"Galanki"
    })
})
app.post("/details",(req,res)=>{
    res.status(200).send("hii")
})




app.listen(port);