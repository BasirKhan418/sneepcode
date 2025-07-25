import express from 'express';
const Pingrouter = express.Router();
import PingController from '../../controllers/ping.controller';
import { ValidateRequestBody } from '../../validators';
import { PingSchema } from '../../validators/ping.validator';
Pingrouter.get('/', ValidateRequestBody(PingSchema), PingController );
export default Pingrouter;