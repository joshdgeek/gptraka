const User = require("../dbmodel/user")
const bcrypt = require("bcrypt")
const {Router} = require("express");
const { findOne } = require("../dbmodel/user");
const app =  Router()

app.get("/",async function(req,res){
    try {
        const user = await User.find({})
        console.log(user.length)
        res.json(user)
        
    } catch (error) {
        res.send(error.message)
    }
})

//Get user by name
app.get("/:name",async function(req,res){
    try {
        let user = await User.findOne({name:req.cookie.name});
        res.json(user)
        return user;
    } catch (error) {
        res.send(error.message)
    }
        
})


// api to change password
app.patch("/password/",async function(req,res){
    const {oldPassword,newPassword} = req.body;
    let user;

    user = await User.findOne({name:req.cookies.name});
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
        res.json({newPasswordErr:err.message})
        console.log(err.message)
    }
})



//deletes a user
app.delete("/delete/",async(req,res)=>{
    try {
        const user = await User.findOne({name:req.cookies.name})
        let {email,password} = req.body
        //verify email before delete
        if(user.email == email){

            //verify password if email exists
            const auth = await bcrypt.compare(password,user.password);
            if(auth){
                await user.remove() //delete user
                res.cookie("jwt","",{maxAge:1})
                res.cookie("name","",{maxAge:1})
                res.json({deleteStatus:"user deleted"})
            }else{
                 res.json({passwordErr:"wrong password"})
            }
        }else{
             res.json({emailErr:"wrong email"})
        }

    } catch (error) {
         res.json({err:"could not delete"})
    }
})



module.exports = app;