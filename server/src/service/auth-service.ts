import client from '../database';
import { BadRequestError } from '../exception/badrequest-exception';
import { NotFoundError } from '../exception/notfound-exception';
import {
    loginQuery,
    registerQuery,
    findByEmailQuery,
    findByUsernameQuery,
} from '../queries/login';
import { Helper } from '../util/helper';

type ReturnTokens = {
    access_token: string;
    refresh_token: string;
};

type RegisterUser = {
    username: string;
    email: string;
    password: string;
};

export class AuthService {
    private helper: Helper;

    constructor() {
        this.helper = new Helper();
    }

    public async login(email: string, password: string): Promise<ReturnTokens> {
        const hashPassword = this.helper.hashPassword(password);

        const result = await client.query(loginQuery, [email, hashPassword]);
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

    public async register(payload: RegisterUser): Promise<object> {
        const { username, email, password } = payload;
        const hashPassword = this.helper.hashPassword(password);
        try {
            await client.query('BEGIN');
            const isUsernameExist = await client.query(findByUsernameQuery, [
                username,
            ]);
            const isEmailExist = await client.query(findByEmailQuery, [email]);
            if (isEmailExist) {
                throw new BadRequestError('Email already exists!');
            } else if (isUsernameExist) {
                throw new BadRequestError('Username alreadt exists!');
            } else {
                const newUser = await client.query(registerQuery, [
                    username,
                    email,
                    hashPassword,
                ]);
                await client.query('COMMIT');
                return newUser;
            }
        } catch (error: any) {
            await client.query('ROLLBACK');
            throw new Error(error);
        }
    }
}
