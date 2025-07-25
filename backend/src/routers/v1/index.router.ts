import express from 'express';
import Pingrouter from './ping.router';
const V1router = express.Router();


V1router.use('/ping', Pingrouter);
export default V1router;