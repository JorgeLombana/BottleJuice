import Express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { error } from 'console'
dotenv.config()

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('Connected to mongo db'))
  .catch((error) => console.log(error))

const app = Express()

app.listen(3000, () => console.log('listening on port', 3000))
