import express from "express"
import userRouter from "./routes/user.js"
import { config } from "dotenv";

config({path:"./data/config.env"});
const app=express();


app.use(express.json());
app.use("/users",userRouter);

app.get("/",(req,res)=>{
    res.send("working..");
    
})

export default app;