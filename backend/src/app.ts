import express from 'express'
import dotenv from 'dotenv'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
// import crudroute from './routes/crudroute'
import usersroute from './routes/usersroute'
import userprofileroute from './routes/userprofileroute'


dotenv.config();

const apps = express()


apps.use(express.json())
apps.use(cookieParser())
apps.use(logger("dev"))



apps.use('/users', usersroute)

apps.use('/profile', userprofileroute)

const PORT = 4000
apps.listen(PORT, () => console.log(`App is listening to ${PORT}`))

export default apps














































































































































