import express from 'express';
import cors from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log(`Server is running on 127.0.0.1:5000`);
});
