/*
userInfo will be attached to req, like:

req.user = {
  userId,
  role
}

But, Express Request does not have 'user' by default. 
So, we must extend Request type.

*/ 

import { JwtTokenPayload } from "../utils/jwt";

declare global {
  namespace Express {
    interface Request {
      user?: JwtTokenPayload;
    }
  }
}
