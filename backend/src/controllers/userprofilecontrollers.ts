import {Request, Response, NextFunction} from 'express'
import {profile} from '../db'

const queries = require("../queries")

export const createprofile  = async (req:Request, res: Response) => {

    try{
        const first_name = req.body.first_name
        const last_name = req.body.last_name
        const email_address = req.body.email_address
        const phone_number = req.body.phone_number
        const age = req.body.age
        const skill = req.body.skill
        const description = req.body.description
        const city = req.body.city
        const state = req.body.state
        const country = req.body.country

        const postprofileQuery = profile.query(queries.postprofile, [first_name, last_name, email_address, phone_number, age, skill, description, city, state, country])
        await postprofileQuery
        res.status(200).send("Profile created successfully")
        
    }catch(error){
        console.error(error)
        res.status(500).send('Error has occurred')
    }
}

export const getallartisans = async (req:Request, res:Response) => {

    try{
        const getuserprofileQuery = profile.query(queries.getuserprofile)

        const getProfile = await getuserprofileQuery
        res.status(200).json(getProfile.rows)
        
    }catch(error){
        console.error(error)
        res.status(500).send('Error has occurred')
    }
}

export const getallartisansBySkill = async (req:Request, res:Response) => {

    try{
        const skill = req.body.skill
        const getStudentQueryBySkill = profile.query(queries.getprofileBySkill, [skill])

        const getUserBySkill = await getStudentQueryBySkill
        res.status(200).json(getUserBySkill.rows)

    }catch(error){
        console.error(error)
        res.status(500).send("An ERROR has occurred")
    } 
}

































