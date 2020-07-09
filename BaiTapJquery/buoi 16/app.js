var express = require("express");
var app = express();
var router = require("./apiRouter.js");

app.use("public",express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
    res.json('Home');
})

app.use('/api/v1',router)

app.listen(8888,()=>{
    console.log("Server start on port");
});