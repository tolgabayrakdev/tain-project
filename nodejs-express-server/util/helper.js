import Jwt from "jsonwebtoken";
import Crypto from "crypto";



export class Helper {

    generateAccessToken(payload) {
        return Jwt.sign(payload, process.env.JWT_SECRET_KEY || 'Secret Key', {
            expiresIn: '1h',
        });
    }

    generateRefreshToken(payload) {
        return Jwt.sign(payload, process.env.JWT_SECRET_KEY || 'Secret Key', {
            expiresIn: '7d',
        });
    }

    generateHashPassword(password) {
        return Crypto.createHash('sha256').update(password).digest('base64');
    }

    deneme(){
        return 1
    }
}