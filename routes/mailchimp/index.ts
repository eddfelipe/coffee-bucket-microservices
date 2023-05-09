import { Router } from 'express';
import { body } from 'express-validator';
import middlewares from '../../middlewares';

import { postMember } from '../../controllers/'


const router = Router();

router.post('/', [
    body('email_address')
        .isEmail()
        .not()
        .isEmpty()
        .isLength({ min: 4 }),
    body('status')
        .not()
        .isEmpty()
        .isLength({ min: 6 }),
    body('FNAME')
        .not()
        .isEmpty()
        .isLength({ min: 6 }),
    body('LNAME')
        .not()
        .isEmpty()
        .isLength({ min: 6 }),
    body('tags')
        .not()
        .isEmpty(),
    middlewares.field_validations
], postMember);

export default router;