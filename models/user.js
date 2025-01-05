import mongoose from "mongoose";

const userSchema=new mongoose.Schema({name:String,email:String,password:String});

const userCollection=new mongoose.model("users",userSchema);

export default userCollection;
