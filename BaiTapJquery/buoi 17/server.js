var express = require("express");
var app = express();
var path = require("path");

app.get("/home/:param1",(req,res)=>{
    var param = parseInt(req.params.param1) *2;
    res.json(param);
})

app.get("/user/:param2",(req,res)=>{
    var newArray = [];
    var param = parseInt(req.params.param2);
    newArray.push(param);
    res.json(newArray);
})

app.listen("8000");


