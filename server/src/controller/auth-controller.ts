import { Request, Response } from 'express';
import { Exception } from '../exception/exception';
import { AuthService } from '../service/auth-service';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const result = await this.authService.login(email, password);
            res.cookie('access_token', result.access_token, {
                httpOnly: true,
            });
            res.cookie('refresh_token', result.refresh_token, {
                httpOnly: true,
            });
            res.status(200).json({ message: 'Login is successful.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public register = async (req: Request, res: Response) => {
        try {
            await this.authService.register(req.body);
            res.status(201).json({ message: 'Account created successfully.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public logout = async (req: Request, res: Response): Promise<void> => {
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
        res.status(200).json({ message: 'Log out is sucessful.' });
    };

    public verify = async (req: Request, res: Response) => {
        try {
            const token: string = req.cookies.access_token;
            const userInformation = await this.authService.verify(token);
            res.status(200).json({ user: userInformation });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };
}
