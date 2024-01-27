import express from "express";
import { AuthController } from "../controller/authController.js";

const router = express.Router();
const authController = new AuthController();

router.post("/login", authController.userLogin);

export default router;