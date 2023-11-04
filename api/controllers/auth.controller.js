import User from '../models/user.model.js'
//bcrypt has te same functionality but has problem in production,install bcryptjs instead
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { errorHandler } from '../utils/error.js'

//===========>SIGN UP<===========//

export const signup = async (req, res, next) => {
  //destructuring the body request (or directly in the new user)
  const { username, email, password } = req.body
  //hash the password with bcrypt and salt 10
  const hashedPassword = bcryptjs.hashSync(password, 10)
  //creation of new user and assignment of the req.body info and saving of the encrypted password instead of the plain string
  const newUser = new User({ username, email, password: hashedPassword })

  try {
    await newUser.save()
    res.status(201).json({ message: 'user created succesfully' })
  } catch (error) {
    next(error)
  }
}

//===========>SIGN IN<===========//
export const login = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const validUser = await User.findOne({ email })
    if (!validUser) {
      return next(errorHandler(404, 'USER NOT FOUND v: '))
    }
    const validPasword = bcryptjs.compareSync(password, validUser.password)
    if (!validPasword) return next(errorHandler(401, 'wrong credentials'))
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
    const { password: hashedPassword, ...rest } = validUser._doc
    const expiryDate = new Date(Date.now() + 3600000) //1 hour 
 
    res
      .cookie('acces_token', token, { htppOnly: true })
      .status(200) 
      .json(rest)
  } catch (error) {
    next(error)
  }
}
