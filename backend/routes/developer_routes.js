import Express from 'express';
import {createDeveloper, getDevelopers} from '../controllers/developer_controller.js';

const developer_router = Express.Router();

developer_router.get('/about', getDevelopers);

developer_router.post('/createdeveloper', createDeveloper);

export default developer_router;