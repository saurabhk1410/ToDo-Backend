import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";
import { addNewTask, deleteTask, getAllTasks, updateTask } from "../controllers/task.js";

const taskRouter=express.Router();

taskRouter.post("/new",isAuthenticated,addNewTask);

taskRouter.get("/alltasks",isAuthenticated,getAllTasks);


taskRouter.route("/:id").delete(isAuthenticated,deleteTask).put(isAuthenticated,updateTask);

export default taskRouter;