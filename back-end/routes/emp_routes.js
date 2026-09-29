let express=require('express');

let bcrypt=require('bcrypt');

let router=express.Router();

let users=require('../models/users');

router.post("/register",async (req,res)=>{

    let data=req.body;

    data.password=await bcrypt.hash(data.password,10);

    let newuser=new users(data);

    let result=await newuser.save();

    res.send(result);

})

router.post("/login",async (req,res)=>{

    let data=req.body;

    data.password=await bcrypt.hash(data.password,10);

})

router.get("/viewtask",async (req,res)=>{

    res.send("view task page called")

})

module.exports=router;