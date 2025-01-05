import userCollection from "../models/user.js";

export const getAllUsers=async(req,res)=>{
    const users=await userCollection.find({});
    console.log(req.query);
    res.json({
        successs:true,
        users
    }
    )
}


export const addNewUser=async(req,res)=>{
    const {name,email,password}=req.body;
    const newUserData=await userCollection.create({name,email,password});
    res.cookie("token","one").status(201).json({
        successs:true,
        newUserData
    })
}

export const getUserByParamsId=async(req,res)=>{
    const {id}=req.params;
    const user=await userCollection.findById(id);
    res.json({
        success:true,
        user
    })
}

