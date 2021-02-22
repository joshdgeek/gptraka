let { Router } = require("express");
let app = Router();
const {requireAuth,permit} = require("../middleware/authMiddleware.js")
let authControllers = require("../controllers/authController")
let dataControllers = require("../Controllers/dataController")
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(bodyParser())
app.use(cookieParser())

app.get("/signup", authControllers.signup_get)
app.post("/signup", authControllers.signup_post)
app.get("/login",permit,authControllers.login_get)
app.post("/login",authControllers.login_post)

app.get("/main",requireAuth,dataControllers.main)
app.post("/main",dataControllers.addData)

app.post("/edit/", dataControllers.edit)
app.get("/changePass",requireAuth,dataControllers.password)
app.get("/deleteAccount",requireAuth,dataControllers.deleteAccount)

app.get("/logout",authControllers.logout)
module.exports = app