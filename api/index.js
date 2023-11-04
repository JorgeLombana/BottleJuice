import Express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { error } from 'console'
import userRoutes from './routes/user.routes.js'

//config the enviorment variables
dotenv.config()

//connection to db
mongoose
.connect(process.env.MONGO)
.then(() => console.log('Connected to mongo db'))
.catch((error) => console.log(error))

//app declaration, app listent to a port, and use the routes
const app = Express()
app.listen(3000, () => console.log('listening on port', 3000))
app.use('/api/user',userRoutes)
