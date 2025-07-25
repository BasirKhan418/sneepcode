import express from 'express';
import PingController from '../../controllers/ping.controller';
const PingrouterV2 = express.Router();
PingrouterV2.get('/', PingController);
export default PingrouterV2;