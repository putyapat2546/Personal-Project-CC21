import { Router } from "express";
import { getMe, login, register, updatePersona } from "../controllers/auth.controller.js";
import authenticateMiddleware from "../middlewares/authenticate.middleware.js";

const authRoute = Router()

authRoute.post('/register', register)
authRoute.post('/login', login)
authRoute.get('/me', authenticateMiddleware, getMe)
authRoute.put('/persona', authenticateMiddleware, updatePersona)

export default authRoute



