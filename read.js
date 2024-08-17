const express= require("express");
const app= express();
const port = 3000;

const fs=require("fs");

app.get("/files",function(req,res){
    fs.readdir(__dirname, function(err, files){  
      if (err) 
          console.log(err); 
        else { 
          console.log("\nCurrent directory filenames:");
          console.log(files); 
          res.json({
            "files":files
          }); 
        }
      }) 
})
app.get("/files/:filename",function(req,res){
  const name=req.params.filename;
  console.log(name);
  fs.readFile("example.txt","utf-8",function(err,data){
    res.json({
      data
    })
  })
})

app.listen(port);