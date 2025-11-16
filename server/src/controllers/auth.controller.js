import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import createHttpError from "http-errors"
import identityKeyUtil from "../utils/identity-key.util.js"
// import prisma from "../config/prisma.config.js"
import { loginSchema, registerSchema } from '../validations/schema.js'
import { createUser, getUserBy } from '../services/user.service.js'

export const register = async (req, res, next) => {
  try {
    const { full_name, email, password } = req.body
    // validation
    const user = registerSchema.parse(req.body)

    // find user if already registered
    const haveUser = await getUserBy('email', email)

    if (haveUser) {
      return next(createHttpError[409]('This user already registered'))
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = { full_name, email, password: hashedPassword }
    
    const result = await createUser(newUser)
    res.status(201).json({
      message: 'Register Successful',
      user: { user_id: result.user_id, email: result.email, full_name: result.full_name }
    })
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    // validate with zod
    const user = loginSchema.parse(req.body)

    const foundUser = await getUserBy('email', email)
    
    // have no this user
    if(!foundUser) {
      return next(createHttpError[401]('Invalid email or password'))
    }
    
    // check password
    let pwOk = await bcrypt.compare(password, foundUser.password_hash)
    if(!pwOk) {
      return next(createHttpError[401]('Invalid email or password'))
    }

    const payload = { id: foundUser.user_id }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      algorithm: 'HS256',
      expiresIn: '15d'
    })
    
    const {password_hash, created_at, ...userData} = foundUser

    res.json({
      message: 'Login Successful',
      token: token,
      user: userData
    })
  } catch (error) {
    next(error)
  }
}

export const getMe = (req, res) => {
  res.json({ user: req.user })
}

