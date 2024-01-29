import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import './database';
import 'dotenv/config';

import authRouter from './routes/auth-router';

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(cookieParser());
app.use(morgan('short'));

app.use('/api/v1/auth', authRouter);

app.listen(5001, () => {
    console.log(`Server is running on 127.0.0.1:5001`);
});
