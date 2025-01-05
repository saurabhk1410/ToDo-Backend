import mongoose from "mongoose";

export const dbCall=()=>{
    mongoose.connect(process.env.MONGODB_URI,{dbName:"newDB"}).then(()=>{
        console.log("mongoDB connected");
    }).catch((err)=>{
        console.log(err);
    });
}