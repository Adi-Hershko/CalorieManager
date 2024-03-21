// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import Express from 'express';
import { getReport, addCalories } from '../controllers/calorie_controller.js';

const calorieRouter = Express.Router();

calorieRouter.get('/report', getReport);

calorieRouter.post('/addcalories', addCalories);

export default calorieRouter;