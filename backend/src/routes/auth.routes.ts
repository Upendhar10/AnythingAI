import { Router } from "express";

import { registerUser, loginUser } from "../controllers/auth.controllers";
import authMiddleware from "../middleware/auth.middleware";
import { getCurrentUser, updateUserProfile } from "../controllers/user.controllers";

const router = Router();

// public routes
router.post('/register', registerUser);
router.post('/login', loginUser)

// private routes
router.get('/me', authMiddleware, getCurrentUser);
router.patch('/profile', authMiddleware, updateUserProfile)

export default router;