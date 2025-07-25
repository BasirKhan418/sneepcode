import express from 'express';
const V2router = express.Router();
import PingrouterV2 from './ping.router';
V2router.use('/ping', PingrouterV2);
export default V2router;