//Exporting Required Modules

const express = require("express");
const mongoose = require("mongoose");
const bodyParser =  require("body-parser");
const cors = require("cors");
const path = require("path");

//creating the express app

const app = express();

//adding middlewares

app.use(bodyParser.json());//this will parse all the data coming to the server as json file
app.use(cors());//this will prevent cors 

//adding routes

const apiRoutes = require("./routes/api");
app.use("/api",apiRoutes);
app.use(express.static("public"));
app.all("/*",(req,res)=>{
    res.sendFile(path.join(__dirname+"/public/index.html"));
})


//Connecting database

const config = require("./config");
mongoose.connect(config.DB,{
    useCreateIndex:true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("[+] Database Connection Successfull");
})
.catch(err=>{
    console.log("[-]Some Error Occured :"+err);
    process.exit(-1);
})

//Addressing the port

const PORT = process.env.PORT || 5000;//just in case we are hosting in heroku

//finally making the app listen to the port

app.listen(PORT,()=>{
    console.log(`[+]Server is running on ${PORT}`);
})