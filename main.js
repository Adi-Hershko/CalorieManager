// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import Express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/config.js";
import userRouter from "./backend/routes/user_routes.js";
import developerRouter from "./backend/routes/developer_routes.js"
import calorieRouter from "./backend/routes/calorie_router.js";

dotenv.config();
const app = Express();

connectDB();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/", userRouter, developerRouter, calorieRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
