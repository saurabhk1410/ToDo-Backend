import { errorHandler } from "../middlewares/error.js";
import taskCollection from "../models/task.js";
import jwt from "jsonwebtoken"
export const addNewTask=async(req,res)=>{
   try {
    const {title,description}=req.body;
    await taskCollection.create({title,description,user:req.user._id});
    res.status(201).json({success:true,meassage:"task added successfully"});
   } catch (error) {
    next(error);
   }
}

export const getAllTasks=async (req,res)=>{
    try {
        const allTasks=await taskCollection.find({user:req.user._id});
    res.status(200).json({success:true,tasks:allTasks});
    } catch (error) {
        next(error);
    }
}

export const deleteTask=async(req,res,next)=>{
   try {
    const task=await taskCollection.findByIdAndDelete(req.params.id);
    if(!task) return next(new errorHandler("Task does not exist",404));

    res.status(200).json({
        success:true,
        meassge:"Task deleted successfully"
    })
    } catch (error) {
        next(error);
        }
}

export const updateTask=async(req,res,next)=>{
   try {
    const task=await taskCollection.findById(req.params.id);
    if(!task) return next(new errorHandler("Invalid Id",404));
    
    task.isCompleted=!task.isCompleted;
    await task.save();
    
    res.status(200).json({
        success:true,
        message:"task updated successfully"
    })
   } catch (error) {
    next(error)
   }
}