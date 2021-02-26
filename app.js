require("dotenv").config()
const PORT = process.env.PORT || 3000
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const {requireAuth,permit} = require("./middleware/authMiddleware.js")
const bodyParser = require("body-parser")
const route  = require("./routes/route.js")
const apiroutes = require("./controllers/api")
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(express.json())

//mongodb connection  mongodb://localhost:27017/gpt
let dbUrl = "process.env.MONGODB_URI || mongodb+srv://gptAdmin:gpt322@cluster0.2civd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect( dbUrl,{useNewUrlParser:true ,useUnifiedTopology:true , useCreateIndex:true})
const db = mongoose.connection;
db.on("error",(err)=> console.log(err))
db.once("open",()=> console.log("mongodb opened"))


//home page
app.get("/",(req,res)=>{
  res.render("index")
})

//other routes
app.use(route)
app.use("/api",apiroutes)
app.listen(PORT,console.log("server connected"))

 