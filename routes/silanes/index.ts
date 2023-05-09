import { Router } from 'express';
import { body } from 'express-validator';
import middlewares from '../../middlewares';

import { getRepresentative, getDoctors, Token, createProgramRequest } from '../../controllers/'


const router = Router();

router.get('/create-token', Token);
router.get('/representative', getRepresentative);
router.get('/doctors', getDoctors);

router.post('/create-program-request', createProgramRequest);

export default router;