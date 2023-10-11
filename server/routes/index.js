import express from 'express';
import responseHandler from '../handlers/response.handler.js';
import userRouter from './user.router.js';
import personRouter from './person.route.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/people', personRouter);

router.use('/test', async (req, res) =>
  responseHandler.ok(res, { msg: 'test' })
);

export default router;
