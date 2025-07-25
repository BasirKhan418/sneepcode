import express from 'express';
import { Request,Response } from 'express';
import { ServerConfig } from './config';
import V1router from './routers/v1/index.router';
import V2router from './routers/v2/index.router';
const app = express();

app.use(express.json());
app.use('/api/v1', V1router);
app.use('/api/v2', V2router);


app.listen(ServerConfig.port, () => {
  console.log(`Server is running on http://localhost:${ServerConfig.port}`);
});
