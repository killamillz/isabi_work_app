import express from 'express'
import {createuser, loginuser } from '../controllers/userscontrollers'

const router = express.Router()

router.post('/signup', createuser)

router.post('/login', loginuser)

export default router