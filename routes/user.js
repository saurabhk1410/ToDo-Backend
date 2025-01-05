import express from "express"
import userCollection from "../models/user.js";
import { addNewUser, getAllUsers, getUserByParamsId } from "../controllers/user.js";

const router=express.Router();

router.get("/all",getAllUsers)

// router.get("/userId",async(req,res)=>{
//     const {id}=req.query;
//     const user=await userCollection.findById(id);
//     res.json({
//         success:true,
//         user
//     })
// })

router.post("/new",addNewUser)

router.get("/:id",getUserByParamsId)

// router
// .route("/users/:id")
// .get(getFunc)
// .post(postFunc)
// .put(putFunc)
// .delete(deleteFunc)

export default router;
