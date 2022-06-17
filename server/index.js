import dotenv from 'dotenv';
import express from 'express';
import connectDb from './config/config.js';

dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
	connectDb();
	console.log('server is listening');
});
