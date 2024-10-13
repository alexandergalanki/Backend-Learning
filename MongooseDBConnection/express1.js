const express=require("express");
const app=express();
const ConnectDB=require("./mongoose1")
const port=3000;

app.use(express.json());
app.get("/",async (req,res)=>{
  
});

ConnectDB().
    then(()=>{
        console.log("DB Connected");
        app.listen(port,async()=>{ 
            console.log(`Server running on port ${port}`);
        }); 
    });
