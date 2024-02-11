// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import Express from "express";
import dotenv from "dotenv";
import connectDB  from "./DB/config.js";
import user_router from "./backend/routes/user_routes.js";
import developer_router from "./backend/routes/developer_routes.js"
import calorie_router from "./backend/routes/calorie_router.js";

dotenv.config();
const app = Express();

connectDB();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Change /api to the link 
app.use("/", user_router, developer_router, calorie_router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);
