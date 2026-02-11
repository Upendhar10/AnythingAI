import jwt, {JwtPayload} from "jsonwebtoken";
import {JWT_SECRET_KEY} from '../config/env.config'

if(!JWT_SECRET_KEY){
    throw new Error ('JWT_SECRET_KEY is not defined in environment Variables')
}

const JWT_SECRET = JWT_SECRET_KEY as string;

export interface JwtTokenPayload {
    userId : string,
    role : 'user' | 'admin'
}

function generateJWTToken(
    payload : JwtTokenPayload,
    expiresIn : string = '1d'
) : string {
    return jwt.sign(payload, JWT_SECRET, {expiresIn})
}

function verifyJWTToken(token : string) : JwtTokenPayload{
    const decoded =  jwt.verify(token, JWT_SECRET) as JwtPayload

    if (!decoded.userId || !decoded.role) {
        throw new Error('Invalid JWT payload or token');
    }

    return {
        userId : decoded.userId as string,
        role : decoded.role as 'user' | 'admin'
    }
}

export { generateJWTToken, verifyJWTToken };