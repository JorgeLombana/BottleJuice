import User from '../models/user.model.js'
//bcrypt has te same functionality but has problem in production,install bcryptjs instead
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { errorHandler } from '../utils/error.js'

//===========>SIGN UP<===========//
export const signup = async (req, res, next) => {
  //destructuring the request body (or directly in the new user)
  const { username, email, password } = req.body
  //hash the password with bcrypt and salt 10
  const hashedPassword = bcryptjs.hashSync(password, 10)
  //create a new user and assign the req.body info, saving the encrypted password instead of the plain string
  const newUser = new User({ username, email, password: hashedPassword })

  try {
    //using my mongoDB model, it will save the new user, send a status 200   and a succesfully json msg
    await newUser.save()
    res.status(201).json({ message: 'user created succesfully' })
  } catch (error) {
    //if an error occurs, next() will use the express predefined middleware to handle the error and send a apropiate response to the client
    next(error)
  }
}

//===========>SIGN IN<===========//
export const login = async (req, res, next) => {
  //destructuring the email and password of the request body of the http petition
  const { email, password } = req.body
  try {
    //check if the email in the request body exist in the db
    const validUser = await User.findOne({ email })
    //if don't exist, send the error to the next middleware for handle the error (in this case my error.js)
    if (!validUser) {
      return next(errorHandler(404, 'USER NOT FOUND v: '))
    }
    //use the bcryptjs library to compare the password destructured of the req.body with the validUser obj returned by mongoDB
    const validPasword = bcryptjs.compareSync(password, validUser.password)
    //if the password aren't the same it will be handle by the middleware
    if (!validPasword) {
      return next(errorHandler(401, 'wrong credentials'))
    }
    //now sign the jwt usign the user object id proportioned by mongoDB(what attribute is optional) and use mi random JWT_SECRET
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
    //destructuring the data of the user given by mongodb, using ._doc to only watch the user data, it separate the password and the demás other info of the user (like username, email)
    const { password: hashedPassword, ...rest } = validUser._doc
    //store an expiry date using an instance of Date + the time i need the user to be authorized.
    const expiryDate = new Date(Date.now() + 3600000) //1 hour
    //and finally send the response of the http request, using the cookie api, it accepts the name parameter, the token and an object with some optionals attributes like only http, secure, and other like setAge. with a succesfull status and the user data in a json
    res.cookie('acces_token', token, { htppOnly: true }).status(200).json(rest)
  } catch (error) {
    //if and error occurs, we send the problem with next to the express predeterminated middleware to handle the error and send a properly response
    next(error)
  }
}
