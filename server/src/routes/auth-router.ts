import express from 'express';
import { AuthController } from '../controller/auth-controller';
import { verifyValidate } from '../middleware/verify-validate';
import registerUser from '../schema/register-user';
import { verifyToken } from '../middleware/verify-token';

const router = express.Router();
const authController = new AuthController();

router.post('/login', authController.login);
router.post('/register', verifyValidate(registerUser), authController.register);
router.post('/verify', verifyToken, authController.verify);
router.post('/logout', verifyToken, authController.logout);

export default router;
