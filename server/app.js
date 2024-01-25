import express from "express";
import helmet from "helmet";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

/**
 * @param {number} PORT
 */
const PORT = process.env.APP_PORT || 1234


app.listen(PORT, () => {
    console.log(`Server is running on 127.0.0.1:${PORT}`);
})