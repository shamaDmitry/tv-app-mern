import express from 'express';
import responseHandler from '../handlers/response.handler.js';
import userRouter from './user.router.js';

const router = express.Router();

router.use('/user', userRouter);

export default router;
