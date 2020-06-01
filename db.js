//import mongodb driver
var mc=require("mongodb").MongoClient;
//to hold db object
var dbo;
var userCollectionObj;
var adminCollectionObj;
//database url
var dbUrl="mongodb+srv://keerthi:keerthi@cluster0-i25dr.mongodb.net/test?retryWrites=true&w=majority";
//function to initialise database
function initDb(){
    mc.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
        if(err)
        {
            console.log("error in connecting in db");
        }
        console.log("connected to database");
        dbo=client.db("mydb");
        userCollectionObj=dbo.collection("usercollection")
        adminCollectionObj=dbo.collection("admincollection")
    })
}
//function to return db object
function getDb(){
   // console.log(dbo,"db has not been initialised.please call init");
    return {
        userCollectionObj:userCollectionObj,
        adminCollectionObj:adminCollectionObj
    }
}
//export 2 functions
module.exports={
    getDb,
    initDb
}