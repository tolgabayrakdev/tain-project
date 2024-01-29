import client from '../database';
import { NotFoundError } from '../exception/notfound-exception';
import { Helper } from '../util/helper';

type ReturnTokenTypes = {
    access_token: string;
    refresh_token: string;
};

export class AuthService {

    constructor(private helper: Helper) {
        this.helper = helper;
    }

    public async login(
        email: string,
        password: string,
    ): Promise<ReturnTokenTypes> {
        const hashPassword = this.helper.hashPassword(password);
        const text = `
        SELECT * FROM users WHERE email = $1 and password = $2
        `;
        const result = await client.query(text, [email, hashPassword]);
        if (result.rows.length === 0) {
            throw new NotFoundError('User not found!');
        }
        const user = result.rows[0];
        const payload = {
            id: user.id,
            email: user.email,
        };
        const accessToken = this.helper.generateAccessToken(payload);
        const refreshToken = this.helper.generateRefreshToken(payload);
        return { access_token: accessToken, refresh_token: refreshToken };
    }
}
