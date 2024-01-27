import express from "express";
import cors from "cors";
import createHttpError from "http-errors";
import authRouter from "./routes/authRouter.js";

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/v1/auth", authRouter);

app.use((req,res,next) =>{
    next(createHttpError(404))
    next()
})


app.listen(5001, () => {
    console.log(`Server is running on 127.0.0.1:5001`);
});
