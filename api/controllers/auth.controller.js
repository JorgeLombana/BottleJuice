import User from '../models/user.model.js'
//bcrypt has te same functionality but has problem in production,install bcryptjs instead
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
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
    res.status(500).send(error.message)
  }
}
