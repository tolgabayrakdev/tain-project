import client from '../database';
import { BadRequestError } from '../exception/badrequest-exception';
import { Exception } from '../exception/exception';
import { InternalServerError } from '../exception/internalserver-exception';
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

    public async register(payload: RegisterUser) {
        const { username, email, password } = payload;
        const hashPassword = this.helper.hashPassword(password);
        try {
            await client.query('BEGIN');
            const isUsernameExist = await client.query(findByUsernameQuery, [
                username,
            ]);
            const isEmailExist = await client.query(findByEmailQuery, [email]);
            if (isEmailExist.rows.length) {
                throw new BadRequestError('Email already exists!');
            } else if (isUsernameExist.rows.length) {
                throw new BadRequestError('Username already exists!');
            } else {
                const newUser = await client.query(registerQuery, [
                    username,
                    email,
                    hashPassword,
                ]);
                await client.query('COMMIT');
                return newUser;
            }
        } catch (error) {
            await client.query('ROLLBACK');
            if (error instanceof Exception) {
                throw error;
            } else {
                throw new InternalServerError('Internal Server Error!');
            }
        }
    }
}
