import Express from 'express';
import { getReport, addCalories } from '../controllers/calorie_controller.js';

const calorie_router = Express.Router();

calorie_router.get('/report', getReport);

calorie_router.post('/addcalories', addCalories);

export default calorie_router;