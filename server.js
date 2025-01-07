import app from "./app.js";
import { dbCall } from "./data/database.js";

dbCall();

app.listen(process.env.PORT,()=>{
    console.log(`server is running... on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
    
})