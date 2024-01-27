import { AuthService } from "../service/authService.js";

const authService = new AuthService();

export default async function userLogin (req, res) {
    try {
        const user = await authService.login(req.body.email, req.body.password);
        console.log(user);
        if (user) {
            res.status(200).json("Login is successful.")
        } else {
            res.status(400).json("Hata")
        }
    } catch (err) {
        console.log(err);
        res.status(500).json("Server Error!")
    }
}