import jwt from "jsonwebtoken";
import {JWT_SECRET_KEY} from '../config/env.config'

if(!JWT_SECRET_KEY){
    throw new Error ('JWT_SECRET_KEY is not defined in environment Variables')
}

const JWT_SECRET = JWT_SECRET_KEY as string;

interface JwtTokenPayload {
    userId : string,
    role : 'user' | 'admin'
}

function generateJWTToken(
    payload : JwtTokenPayload,
    expiresIn : string = '1d'
) : string {
    return jwt.sign(payload, JWT_SECRET, {expiresIn})
}

export { generateJWTToken };