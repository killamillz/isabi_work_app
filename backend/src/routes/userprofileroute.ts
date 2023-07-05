import express from 'express'
import { auth } from '../utilities/auth'

import { createprofile, getallartisans, getallartisansBySkill } from '../controllers/userprofilecontrollers'

const router = express.Router()

router.post('/page', auth, createprofile)

router.get('/skill', getallartisans)

router.get('/', getallartisansBySkill)

export default router;