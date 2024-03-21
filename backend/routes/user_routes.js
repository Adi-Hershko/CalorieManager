// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import Express from "express";
import { createNewUser } from "../controllers/user_controller.js";

const userRouter = Express.Router();

userRouter.post('/signup', createNewUser);

export default userRouter;