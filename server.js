const http= require("http");

const server=http.createServer((req,res)=>{
    console.log(req);
    res.end("Hi from node js");
});

server.listen(3000);