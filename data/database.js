import mongoose from "mongoose";

export const dbCall=()=>{
    mongoose.connect(process.env.MONGODB_URI,{dbName:"TODO"}).then((c)=>{
        console.log(`mongoDB connected to ${c.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    });
}