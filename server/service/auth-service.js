import client from '../database.js';
import Helper from '../util/helper.js';

export default class AuthService {
    helper = new Helper();
    /**
     *
     * @param {string} email
     * @param {string} password
     * @returns {Promise<object>}
     */
    async login(email, password) {
        const hashPassword = this.helper.generateHashPassword(password);
        const text = `SELECT * FROM users WHERE email = $1 and password = $2`;
        const result = await client.query(text, [email, hashPassword]);
        if (result.rows.length === 0) {
            throw new Error('User not found!');
        }
        const userInformation = result.rows[0];
        const payload = {
            id: userInformation.id,
            email: userInformation.email,
        };
        const accessToken = this.helper.generateAccessToken(payload);
        const refreshToken = this.helper.generateRefreshToken(payload);
        return { access_token: accessToken, refresh_token: refreshToken };
    }

    deneme(){
        console.log("DENEME");
    }
}
