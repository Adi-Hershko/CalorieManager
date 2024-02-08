// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import Express from 'express';
import {createDeveloper, getDevelopers} from '../controllers/developer_controller.js';

const developer_router = Express.Router();

developer_router.get('/about', getDevelopers);

developer_router.post('/createdeveloper', createDeveloper);

export default developer_router;