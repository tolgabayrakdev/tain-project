import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import './database.js';
import authRouter from "./routes/auth-router.js"
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

/**
 * @param {number} PORT
 */
const PORT = process.env.APP_PORT || 1234;


app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on 127.0.0.1:${PORT}`);
});
