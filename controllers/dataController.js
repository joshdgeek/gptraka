const mongoose = require("mongoose")
const User = require("../dbmodel/user")
const jwt = require("jsonwebtoken")


module.exports.main= async (req,res)=>{
    try{
      const fetchUser = await User.findOne({name:req.cookies.name})
      let userList =  fetchUser.list;
      let userPoint = fetchUser.points;
      let userUnits = fetchUser.units;
      let A = [];
      let B = [];
      let C = [];
      let D = [];
      let E = [];
    
     for (let i=0;i<=userPoint.length;i++){
         if(userPoint[i] > 100){
            A.push(userPoint[i])
         }
      }
    
      //grade A loop
      for(let a=70;a<=100;a++){
        A.push(a)
      }
    
     //grade B loop
      for(let b=60;b<=69;b++){
        B.push(b)
      } 
    
      // grade C loop
      for(let c=50;c<=59;c++){
        C.push(c)
      } 
      // grade D loop
      for(let d=40;d<=49;d++){
        D.push(d)
      } 
    
      //grade E loop
      for(let e=0;e<=39;e++){
        E.push(e)
      } 
    
      //console.log(userList)
      res.render("main",{
          courses:userList,
           units:userUnits,
            points:userPoint,
            gradeA:A,gradeB:B,gradeC:C,gradeD:D,gradeE:E})  
    } 
 catch(error){
     console.log(error)
 }
}


// addding courses to the db
module.exports.addData = async (req,res)=>{

const {courses,unit,gradePoint} = req.body;
try {
  
  const dataList = await User.findOneAndUpdate({name:req.cookies.name},{
    $addToSet:{
      list:courses
    }
  })

  
  const data = await User.findOneAndUpdate({name:req.cookies.name},{
    $push:{
      points:gradePoint,
      units:unit
    }
    })
    
  console.log(dataList.list,data.points)
  res.json(data);

} catch (error) {
    console.log(error)
}
}

// edit course and grade point


module.exports.edit = async(req,res)=>{
  try {
    let {index} = req.body;
    // setting the entry to null 
    // keyword: "$unset"
     let unit = `units.${index}`;
     let items = `list.${index}`;
     let point = `points.${index}`

     let setToNull = await User.findOneAndUpdate({name:req.cookies.name},{
        $unset:{ 
        [unit]:1,
        [items]:1,
        [point]:1
        }
     })

   // delete the entry, keyword: $pull
   let deleteNullValues = await User.findOneAndUpdate({name:req.cookies.name},{
     $pull:{
        list:null,
        points:null,
        units:null
     }
   })
    

   res.json({status:"recieved"});

  } catch (error) {
    console.log(error)
    res.json({status:"error occured"})
  }

} 
