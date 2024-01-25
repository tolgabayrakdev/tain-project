import AuthService from "../service/auth-service.js";



export default class AuthController {
    authService = new AuthService();

    /**
     *
     * @param {*} req
     * @param {*} res
     */
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await this.authService.login(email, password);
            res.cookie('access_token', result.access_token, {
                httpOnly: true,
            });
            res.cookie('refresh_token', result.refresh_token, {
                httpOnly: true,
            });
            res.status(200).json({ message: 'Login has successful.' });
        } catch (error) {
            res.status(500).json('Internal Server Error!');
        }
    }


}
