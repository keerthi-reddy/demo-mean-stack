//create mini express appn and handle admin req
const exp=require("express");
const userApp=exp.Router();


const verifyToken=require("../middleware/verifytoken");


//import modules  related to cloudinary
const cloudinary =  require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer= require("multer");

//configure cloudinary
cloudinary.config({
    cloud_name: 'do8ujullm',
    api_key: '276121795183361',
    api_secret: 'p5tF0tDi8R-RYXXQFjM4zBcU3gk'
});

//configure the cloudinary storage
var storageForCloudinary = cloudinaryStorage({
    cloudinary:cloudinary,
    folder:'myfiles',
    allowedFormats: ['jpg','png','jpeg'],
    filename: function(req,file,cb)
    {
        cb(undefined,file.fieldname + '-' + Date.now());
    }
});

//configure multer
var upload = multer({storage:storageForCloudinary});


//user body parser middleware
userApp.use(exp.json());

//import dbo from db.js
const dbo=require("../db");
dbo.initDb();
var jwt=require("jsonwebtoken");
var bcrypt=require("bcrypt")
//localhost:port/user/login(POST)
//localhost:port/user/register (POST)
//localhost:port/user/readprofile/username (GET)

userApp.get('/userprofile/:username',verifyToken,(req,res)=>{
    // res.send({message:"user profile works"})
    var userCollectionObj=dbo.getDb().userCollectionObj;
    userCollectionObj.findOne({username:req.params.username},(err,userObjFromDB)=>{
        if(err){
            console.log("error");
        } else {
            res.send({message:"userprofile get function",data:userObjFromDB});
        }
    })
});

userApp.post('/login',(req,res)=>{
   // console.log("user obj is",req.body);
   // res.send({message:"user login works"})

   //verify username
   var userCollectionObj=dbo.getDb().userCollectionObj;
   userCollectionObj.findOne({username:req.body.username},(err,userObj)=>{
       if(err)
       {
           console.log("err in read",err);
       }
       else if(userObj==null)
       {
           res.send({message:"invalid username"});
       }
       else{
           bcrypt.compare(req.body.password,userObj.password,(err,result)=>{
               if(err)
               {
                   console.log("err in compare",err);
               }
               else if(result==false)
               {
                   res.send({message:"invalid password"});
               }
               else{
                   //create a token and send it to client
                   jwt.sign({username:userObj.username},'ssshhh',{expiresIn:10},(err,signedToken)=>{
                        if(err)
                        {
                            console.log("err",err);
                        }
                        else
                        {
                            res.send({
                                message:"success",
                                token:signedToken,
                                username:userObj.username
                            });
                        }
                   })
               }
           })
       }
   })
});
userApp.post('/register',upload.single("photo"),(req,res,next)=>{
//    console.log("body is ",req.body);
//     //res.send({message:"user register works"})
//     //check for user

//     console.log("Cdn link of uploaded file is ",req.file.secure_url);
    
//     req.body=JSON.parse(req.body.userObj);
//     req.body.profileImageUrl=req.file.secure_url;

//     //remove key "photo"
//     delete req.body.photo;
console.log("req body is ",req.body)
  console.log("url is ", req.file.secure_url);
  console.log("user data is ", JSON.parse(req.body.userObj));


  req.body=JSON.parse(req.body.userObj);  
  req.body.profileImageUrl = req.file.secure_url;


  delete req.body.photo;
  var userCollectionObj=dbo.getDb().userCollectionObj;
    userCollectionObj.findOne({username:req.body.username},(err,userObjFromDb)=>{
        if(err)
        {
            console.log("err in register",err)
        }
        else if(userObjFromDb!=null)
        {
            res.send({message:'username already existed'})
        }
        else
        {
            var hashedPassword=bcrypt.hashSync(req.body.password,7)
            req.body.password=hashedPassword
            userCollectionObj.insertOne(req.body,(err,success)=>{
                if(err)
                {
                    console.log('error')
                }
                else{
                    res.send({message:"register successful"})
                }
            })
        }
    })
})

// const verifyToken=require("../middleware/verifytoken");

//test req handler
userApp.get('/test',verifyToken,(req,res)=>{
    //res.send({message:"test woring"})
    console.log("req headers is ",req.headers.authorization)
})
//export userApp
module.exports=userApp;