import { NextFunction, Request, Response } from "express";
import { verifyJWTToken } from "../utils/jwt";

function authMiddleware(req : Request, res: Response, next: NextFunction) {
    try {

        const authHeader = req.headers.authorization;

        // validation
        if(!authHeader){
            return res.status(401).json({
                message : "Authorization Header Missing"
            })
        }

        if(!authHeader.startsWith('Bearer ')){
            return res.status(401).json({
                message : "Invalid Authorization Header Format"
            })
        }

        // extract token from auth header
        const token = authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({
                message : "Authorization Token Missing"
            })
        }

        // verify the token
        const userInfo = verifyJWTToken(token);

        // Attach userInfo to the request
        req.user = userInfo;
        
        next()
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid or Expired Token',
        });
    }
}

export default authMiddleware;