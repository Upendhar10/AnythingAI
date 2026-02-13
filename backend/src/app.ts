import cors from "cors"
import express from 'express';

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://anything-ai-seven.vercel.app/"
]
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

// Routes
import authRouter from "./routes/auth.routes"

app.use('/api/v1/auth', authRouter);

export default app;