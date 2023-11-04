import Express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { error } from 'console'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

//config the enviorment variables
dotenv.config()

//connection to db
mongoose
.connect(process.env.MONGO)
.then(() => console.log('Connected to mongo db'))
.catch((error) => console.log(error))

//app declaration
const app = Express()
//app configarotion to can have json 
app.use(Express.json())
//app listent to a port
app.listen(3000, () => console.log('listening on port', 3000))
//app uses routes
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
