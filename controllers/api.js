const User = require("../dbmodel/user")
const bcrypt = require("bcrypt")
const {Router} = require("express");
const { findOne } = require("../dbmodel/user");
const app =  Router()

app.get("/",async function(req,res){
    try {
        const user = await User.find({})
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
})

//create
app.get("/:name",async function(req,res){
    try {
        let user = await User.findOne({name:req.params.name});
        res.json(user)
        return user;
    } catch (error) {
        res.send(error.message)
    }
        
})


// api to change password
app.patch("/password/:name",async function(req,res){
    const {oldPassword,newPassword} = req.body;
    let user;

    user = await User.findOne({name:req.params.name});
    if(user){
        const auth = await bcrypt.compare(oldPassword,user.password);

        //check if password is valid
        if(auth){
            user.password = newPassword;
        }
        else{
            return res.json({err:"wrong password"})
        }
        //password validation break point
    }
    else{
        res.json({err:"user not found"})
    }
    try {
        const use = await user.save();
        res.json({success:"password changed sucessfully , please go back"})
        
    } catch (err) {
        res.json({Err:err.message})
    }
})




//delete 
app.delete("/:name", async function(req,res){
 const users = await User.findOneAndDelete({name:req.params.name});
 res.send(users.name)
})

async function gg(req,res,next){
    let sub;

    try {
        sub = await User.findOne({name:req.params.name});
        if(user==null){
            return res.json({errr:"user doesnt exist"})
        }
    } catch (err) {
        console.log(err.message)
    }
    res.sub = sub
    next();
}

module.exports = app;