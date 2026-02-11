export const PORT : number = Number (process.env.PORT) || 8000;
export const MONGODB_URL = process.env.MONGODB_URI as string;
export const JWT_SECRET_KEY = process.env.JWT_SECRET as string;