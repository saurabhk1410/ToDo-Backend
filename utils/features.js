import jwt from "jsonwebtoken"

export const resWithCookie=(res,user,message,statusCode=200,)=>{
    const token = jwt.sign({_id:user._id},process.env.SECRET_KEY)

    res.status(statusCode).cookie("token",token,{
        httpOnly:true,
        maxAge:15*60*1000,
        sameSite:process.env.NODE_ENV==="dev"?"lax":"none",
        secure:process.env.NODE_ENV==="dev"?false:true,
    })
    .json({success:true,message});

}

