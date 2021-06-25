const express= require("express");
const body= require("body-parser");
const app= express();
app.use(express.static("public"));
app.use(body.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})













app.listen(3000,function(){
  console.log("Your server is on");
})
