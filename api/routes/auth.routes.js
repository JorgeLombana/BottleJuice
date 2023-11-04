import Express from 'express'
import { signup } from '../controllers/auth.controller.js'

const authRouter = Express.Router()

authRouter.post('/signup', signup)

export default authRouter
