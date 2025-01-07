import mongoose from "mongoose";
import userCollection from "./user.js";
const taskSchema=new mongoose.Schema({
    title:{type:String,required:true,},
    description:{type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    isCompleted:{type:Boolean,default:false},
    user:{type:mongoose.Schema.Types.ObjectId,ref:userCollection,required:true}
})

const taskCollection=new mongoose.model("tasks",taskSchema);

export default taskCollection;
