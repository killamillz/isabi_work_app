import {Request, Response, NextFunction} from 'express'
import bcrypt from 'bcrypt' // to encrypt the user password in the database
import jwt from 'jsonwebtoken'
import {pool} from '../db'
import {userSchema} from '../validator/uservalidation'


const queries = require("../queries")

export const createuser = async (req:Request, res: Response) => {

    try{
        const username = req.body.username
    
        const phone_number = req.body.phone_number
        const password = req.body.password
        const email = req.body.email

        const userData = req.body
        const error = userSchema.safeParse(userData)
        console.log("ERROR", error)
        if(error.success === false){
            res.status(400).send({
                status: "failed",
                message: error.error.issues[0].message
            })
            return;
        }


        const getUsersQuery = pool.query(queries.getusersByEmail , [email])

        const getUsersResult = await getUsersQuery;

        const no_user = getUsersResult.rows.length;


        if (no_user > 0) {
          res.send("Email already in use");
          return;
        }else if(no_user === 0){
            const saltLength = 10;
            const hashedPassword = await bcrypt.hash(password, saltLength);

            const postUserQuery = pool.query(queries.createusers, [username, email, phone_number, hashedPassword])
            await postUserQuery

            res.status(200).send("USER created successfully")
        }
    }catch(error){
        console.error(error)
        res.status(500).send('Error has occurred')
    }
}

export const loginuser = async (req:Request, res: Response) => {

    try{
        const username = req.body.username
        const email = req.body.email
        const phone_number = req.body.phone_number
        const password = req.body.password

        const getUsersQuery = pool.query(queries.getusersByEmail , [email])

        const getUsersResult = await getUsersQuery;

        const no_user = getUsersResult.rows.length;

        if (no_user === 0) {
          res.send("Account does not exist");
          return;
        }else if(no_user === 1){
            const userpassword = getUsersResult.rows[0].password;

            const validate = await bcrypt.compare(password, userpassword)
            if(validate){
                const jwtname = getUsersResult.rows[0].username;
                const payload = { username: jwtname };
                const token = jwt.sign(payload, "NosaObasuyi")
                return res.status(200).json({
                    message: "LOGIN SUCCESSFUL",
                    username: email,
                    token
                })
            }else{
                res.send("Login DETAILS does not match")
            }
        }
    }catch(error){
        console.error(error)
        res.status(500).send('Error has occurred')
    }
}