// 


import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { errorMiddleWare } from "./middlewares/error.js";
import cors from "cors";

config({ path: "./data/config.env" });
const app = express();

// ✅ CORS should be before routes and body parsing middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,  // Use the env variable correctly
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE"],
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

// ✅ Correct route order
app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.get("/", (req, res) => {
    res.send("working..");
});

app.use(errorMiddleWare);
export default app;
