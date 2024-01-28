import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import './database';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(cookieParser());
app.use(morgan('combined'));

app.listen(5000, () => {
    console.log(`Server is running on 127.0.0.1:5000`);
});
