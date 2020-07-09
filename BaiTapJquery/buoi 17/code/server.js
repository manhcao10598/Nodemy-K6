var express = require("express");
var app = express();
var path = require("path");

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"))
})

app.listen("8000"),()=>{
    console.log("Ket noi server thanh cong");
};


