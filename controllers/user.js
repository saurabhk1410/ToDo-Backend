import userCollection from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { resWithCookie } from "../utils/features.js";
import { errorHandler } from "../middlewares/error.js";

export const register=async(req,res,next)=>{
    try {
        const {name,email,password}=req.body;
    
    let user=await userCollection.findOne({email});

    if(user) return next(new errorHandler("Email already exists",400));

    const hashedPass=await bcrypt.hash(password,10);

    user=await userCollection.create({name,email,password:hashedPass});
 
    resWithCookie(res,user,"Registered Successfully",201);
    } catch (error) {
        next(error);
    }
   
}

export const loginFunc=async(req,res,next)=>{
  try {
    const {email,password}=req.body;
    const user=await userCollection.findOne({email}).select("+password");

    if(!user) return next(new errorHandler("Invalid Email or Password",401));

    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch) return next(new errorHandler("Invalid Email or Password",401));

    resWithCookie(res,user,`welcome back, ${user.name}`,200);
  } catch (error) {
    next(error)
  }

}

export const getMyDetails=(req,res)=>{
    
    res.status(200).json({
        success:true,
        user:req.user
    })
}

export const logoutFunc=(req,res)=>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now()),
        sameSite:process.env.NODE_ENV==="dev"?"lax":"none",
        secure:process.env.NODE_ENV==="dev"?false:true,
    }).json({
        success:true,
        message:"Logged out successfully"
    })
}