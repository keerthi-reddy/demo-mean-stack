//install and import express
const exp=require("express");
//import adminApp and userApp
const bodyParser = require('body-parser');
//get express obj
const app=exp();
//import path module
const path=require("path");

//connect server.js with angular app of dist folder
app.use(exp.static(path.join(__dirname,'./dist/MYFIRST-ANGULAR-app')))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const adminApp=require("./apis/adminapi")
const userApp=require("./apis/userapi")
const cloudApp = require("./apis/cloudapi");
//forwarding req object to apis
app.use("/admin",adminApp);
app.use("/user",userApp);
app.use("/upload",cloudApp);



//assign port no
const port=3000;
app.listen(port,()=>{console.log(`server running on port ${port}`)})