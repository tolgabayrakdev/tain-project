import client from "../database";
import { NotFoundError } from "../exception/notfound-exception";
import { Helper } from "../util/helper";


export class AuthService {

    private helper = new Helper();

    public async login(email: string, password: string): Promise<object> {
        const hashPassword = this.helper.hashPassword(password);
        const text = `
        SELECT * FROM users WHERE email = $1 and password = $2
        `;
        const result = await client.query(text, [email, password]);
        if (result.rows.length === 0) {
            throw new NotFoundError("User not found!");
        }
        const user = result.rows[0];
        const payload = {
            id: user.id,
            email: user.email
        };
        const accessToken = this.helper.generateAccessToken(payload);
        const refreshToken = this.helper.generateRefreshToken(payload);
        return { access_token: accessToken, refresh_token: refreshToken }
    }


}