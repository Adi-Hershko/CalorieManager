import Express from "express";
import { createNewUser } from "../controllers/user_controller.js";

const user_router = Express.Router();

user_router.post('/signup', createNewUser);

export default user_router;