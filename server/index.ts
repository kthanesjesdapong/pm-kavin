import 'dotenv/config';
import config from 'config';
import express from 'express';
import logger from './utils/logger';
const port = config.get<number>('port');
const app = express();

//Body Parsing MiddleWare
app.use(express.json());

const AWS_ACCESS_KEY_ID = config.get<string>('accessKeyId');
console.log(AWS_ACCESS_KEY_ID);
app.listen(port, async () => {
  logger.info(`App is running on port ${port} `);
});