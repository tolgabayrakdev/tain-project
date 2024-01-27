import { Exception } from "../http_errors/exception.js";
import { AuthService } from "../service/authService.js";


export class AuthController {

    constructor() {
        this.authService = new AuthService();
    }

    userLogin = async (req, res) => {
        try {
            const user = await this.authService.login(req.body.email, req.body.password);
            if (user) {
                res.status(200).json("Login is successful.");
            } else {
                res.status(400).json("Error");
            }
        } catch (err) {
            if (err instanceof  Exception) {
                res.status(err.statusCode).json({ message: err.message });
            }else {
                console.log(err);
                res.status(500).json("Server Error!");
            }
           
        }
    };
}
