import express from "express"
import userCollection from "../models/user.js";
import { getMyDetails, loginFunc, logoutFunc, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router=express.Router();

router.post("/new",register);

router.post("/login",loginFunc);

router.get("/logout",isAuthenticated,logoutFunc);

router.get("/me",isAuthenticated,getMyDetails);

export default router;
