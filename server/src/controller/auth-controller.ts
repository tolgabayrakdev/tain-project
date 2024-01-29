import { Request, Response } from 'express';
import { Exception } from '../exception/exception';
import { AuthService } from '../service/auth-service';

export class AuthController {
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const result = await this.authService.login(email, password);
            res.cookie('access_token', result.access_token, {
                httpOnly: true,
            });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };
}
