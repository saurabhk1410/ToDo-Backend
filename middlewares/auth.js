import jwt from "jsonwebtoken"
import userCollection from "../models/user.js";


export const isAuthenticated=async(req,res,next)=>{
    const {token}=req.cookies;

    if(!token) return res.status(404).json({success:false,message:"login first"});
    
    const decoed=jwt.verify(token,process.env.SECRET_KEY);

    const user=await userCollection.findById(decoed._id);

    req.user=user;

    next();
}