import jwt from "jsonwebtoken"

export const resWithCookie=(res,user,message,statusCode=200,)=>{
    const token = jwt.sign({_id:user._id},process.env.SECRET_KEY)

    res.status(statusCode).cookie("token",token,{httpOnly:true,maxAge:15*60*1000})
    .json({success:true,message});

}

