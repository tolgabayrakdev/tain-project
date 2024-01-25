import Jwt from 'jsonwebtoken';
import Crypto from 'crypto';

export class Helper {
    /**
     *
     * @param {object} payload
     * @returns {string}
     */

    generateAccessToken(payload) {
        return Jwt.sign(payload, process.env.JWT_SECRET_KEY || 'Secret Key', {
            expiresIn: '1h',
        });
    }

    /**
     *
     * @param {object} payload
     * @returns {string}
     */

    generateRefreshToken(payload) {
        return Jwt.sign(payload, process.env.JWT_SECRET_KEY || 'Secret Key', {
            expiresIn: '7d',
        });
    }

    /**
     *
     * @param {string} password
     * @returns {string}
     */
    generateHashPassword(password) {
        return Crypto.createHash('sha256').update(password).digest('base64');
    }

    /**
     *
     * @param {string} token
     * @returns {object}
     */

    decodeJwtToken(token) {
        try {
            const decocedToken = Jwt.verify(
                token,
                process.env.JWT_SECRET_KEY || 'Secret Key',
            );
            return decocedToken;
        } catch (error) {
            throw new Error(error);
        }
    }
}
