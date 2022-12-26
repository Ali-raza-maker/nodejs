// const express = require("express")
// var app = express()
// app.get("/",function(request,response){
// response.send("Hello World!")
// })
// app.listen(10000, function () {
// console.log("Started application on port %d", 10000)
// });
const http = require('http')
const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req , res) => {
    res.statusCode =200;
    res.setHeader('Content-Type' , 'text/plain');
    res.end("Zeet Node");
});

server.listen(port, hostname , () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})