import cors from "cors"
import express from 'express';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);

app.use(express.json());

// Routes
import authRouter from "./routes/auth.routes"

app.use('/api/v1/auth', authRouter);

export default app;