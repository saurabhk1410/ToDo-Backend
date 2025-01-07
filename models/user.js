import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String,required:true,},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,select:false},
    createdAt:{type:Date,default:Date.now}
})

const userCollection=new mongoose.model("users",userSchema);

export default userCollection;
