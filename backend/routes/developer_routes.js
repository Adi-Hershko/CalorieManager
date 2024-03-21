// Developers:
//1. Adi Hershko, id: 208729814
//2. Ori Amrani, id: 206752313

import Express from 'express';
import { createDeveloper, getDevelopers } from '../controllers/developer_controller.js';

const developerRouter = Express.Router();

developerRouter.get('/about', getDevelopers);

developerRouter.post('/createdeveloper', createDeveloper);

export default developerRouter;