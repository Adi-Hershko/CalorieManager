// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import Express from 'express';
import { getReport, addCalories } from '../controllers/calorie_controller.js';

const calorie_router = Express.Router();

calorie_router.get('/report', getReport);

calorie_router.post('/addcalories', addCalories);

export default calorie_router;