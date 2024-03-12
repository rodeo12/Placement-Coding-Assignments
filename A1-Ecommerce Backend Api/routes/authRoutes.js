const express= require("express");
const router= express.Router();
const jwt= require("jsonwebtoken");
const {JWT_SECRET}= require("../config/jwt");
const User= require( "../models/user");
const errorHandler = require("../utils/errorHandler") ;


router.post("/register", async (req,res)=>{
 try{
  const {username,email,password}= req.body;
 
  const existingUser= await User.findOne({email}) ;
  if(existingUser){
    return res.status(400).json({message:"User already exists"}) ;
  }

  const user= new User({username,email,password})
  await user.save();
  res.status(201).json({message:"User registered successfully"}) ;



 }catch(err){
  errorHandler(err.res)
 }

})


router.login("/login", async (req,res)=>{
  try{
   const {email,password}= req.body;
  
   const existingUser= await User.findOne({email}) ;
   if(existingUser){
     return res.status(400).json({message:"User already exists"}) ;
   }
 
   const user= new User({username,email,password})
   await user.save();
   res.status(201).json({message:"User registered successfully"}) ;
 
 
 
  }catch(err){
   errorHandler(err.res)
  }
 
 })
