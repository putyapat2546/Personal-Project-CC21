import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import authRoute from './routes/auth.route.js'
import createHttpError from 'http-errors'
import errorMiddleware from './middlewares/error.middleware.js'
import notFoundMiddleware from './middlewares/notFound.middleware.js'
import shutdownUtil from './utils/shutdown.util.js'

const app = express()
app.use(morgan("dev"))
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max : 100,
}))
app.use(helmet())

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"], // allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // allow cookies if needed
}));

app.use(express.json())

app.use('/api/auth', authRoute)


app.use(notFoundMiddleware)
app.use(errorMiddleware)

process.on('SIGINT', ()=> shutdownUtil('SIGINT')) // CTRL+C
process.on('SIGTERM', ()=> shutdownUtil('SIGTERM')) // normal kill process

// Catch unhandled errors
process.on("uncaughtException", ()=>  shutdownUtil('uncaughtException'))
process.on("unhandledRejection", ()=> shutdownUtil('unhandledRejection'))

export default app
