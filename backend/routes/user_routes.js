// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import Express from "express";
import { createNewUser } from "../controllers/user_controller.js";

const user_router = Express.Router();

user_router.post('/signup', createNewUser);

export default user_router;