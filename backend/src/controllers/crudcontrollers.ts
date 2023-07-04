import {Request, Response, NextFunction} from 'express'

const queries = require("../queries")

import pool from '../db'

//GET REQUEST

export const createcrud = async (req:Request, res: Response) => {
    try{
        const getStudentQuery = pool.query(queries.getcruds)

        const getStudent = await getStudentQuery
        res.status(200).json(getStudent.rows)

    }catch(error){
        console.error(error)
        res.status(500).send("An ERROR has occurred")
    }
}

// export const createcrud = async (req:Request, res: Response) => {
//     pool.query(queries.getcruds, (error:any, results:any) => {
//         if (error){
//             throw error;
//         } 
//         res.status(200).json(results.rows)
//     })
// }

//GET REQUEST BY ID

export const createcrudById = async (req:Request, res: Response) => {
    try{
        const id = parseInt(req.params.id)
        const getStudentQueryById = pool.query(queries.getcrudsById, [id])

        const getStudent = await getStudentQueryById
        res.status(200).json(getStudent.rows)

    }catch(error){
        console.error(error)
        res.status(500).send("An ERROR has occurred")
    }
}

// export const createcrudById = async (req:Request, res: Response) => {
//     const id = parseInt(req.params.id)
//     pool.query(queries.getcrudsById, [id], (error:any, results:any) => {
//         if (error){
//             throw error;
//         } 
//         res.status(200).json(results.rows)
//     })
// }



//POST REQUEST

export const postcrud = async (req:Request, res: Response) => {
    try{
        const email = req.body.email
        const name = req.body.name

        const getStudentQuery = pool.query(queries.getcrudsByEmail, [email])

        const getStudentResult = await getStudentQuery;

        

        const nostudent = getStudentResult.rows.length;

        console.log(nostudent)

        if (nostudent > 0) {
          res.send("Student already exists in the database");
          return;
        }else if(nostudent === 0){
            const postStudentQuery = pool.query(queries.postupdatecrud, [name, email])
            await postStudentQuery
            res.status(200).send("Student created successfully")
        }
    }catch(error){
        console.error(error)
        res.status(500).send('Error has occurred')
    }
}

// export const postcrud = async (req:Request, res: Response) => {
//     const email = req.body.email
//     const name = req.body.name
//     //check if email exists
//     pool.query(queries.postcrud, [email], (error:any, result:any) => {
//         if(result.rows.length){
//             res.send("Email Already exists")
//         }
        
//     })

//     pool.query(queries.postupdatecrud, [name, email], (error:any, result:any) => {
//         if(error){
//             throw error;
//         }
//         res.status(200).send("Student created successfully")
        
//     })
// }



//DELETE REQUEST

export const deletecrud = async (req:Request, res: Response) => {
    try{
        const id = parseInt(req.params.id);
        const getStudentQuery = pool.query(queries.getcrudsById, [id]);


        const getStudentResult = await getStudentQuery;
        const nostudent = !getStudentResult.rows.length;

        console.log(nostudent)

        if (nostudent) {
          res.send("Student does not exist in the database");
          return;
        }

        const deletdEmailQuery = pool.query(queries.deletecrudpost, [id]);
        await deletdEmailQuery

        res.status(200).send("Student has successfully been deleted")

    }catch(error){
        console.error(error);
        res.status(500).send("An error occurred")
    }
}

// export const deletecrud = async (req:Request, res: Response) => {
//     const id = parseInt(req.params.id)
//     pool.query(queries.getcrudsById, [id], (error:any, result:any) => {
//         const nostudent = !result.rows.length
//         if(nostudent){
//             res.send("Student does not exist")
//         }
//     })

//     pool.query(queries.deletecrudpost, [id], (error:any, results:any) => {
//         if (error){
//             throw error;
//         } 
//         res.status(200).send("Student has successfully been deleted")
//     })
// }



//PUT REQUEST

export const updatedcrud = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const name = req.body.name;
      const email = req.body.email;
  
      const getStudentQuery = pool.query(queries.getcrudsById, [id]);
  
  
      const getStudentResult = await getStudentQuery;
      const nostudent = !getStudentResult.rows.length;
      if (nostudent) {
        res.send("Student does not exist in the database");
        return;
      }


      const updateNameQuery = pool.query(queries.updatescrud, [name, id]);
      await updateNameQuery;

      const updateEmailQuery = pool.query(queries.updatescrudemail, [email, id]);
      await updateEmailQuery;
  
      res.status(200).send("Student details have been UPDATED successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred");
    }
  };



// export const updatedcrud = async(req:Request, res:Response) => {
//     const id = parseInt(req.params.id)
//     const name = req.body.name
//     const email = req.body.email

//     pool.query(queries.getcrudsById, [id], (error:any, result:any) => {
//         const nostudent = !result.rows.length
//         if(nostudent){
//             res.send("Student does not exist in the database")
//             return;
//         }
//     })

//     pool.query(queries.updatescrud, [name, id], (error:any, result:any) => {
//         if(error){
//             throw error
//         }
//         res.status(200).send("Student details have been UPDATED succesfully")
//     })

//     pool.query(queries.updatescrudemail, [email, id], (error:any, result:any) => {
//         if(error){
//             throw error
//         }
//     })
// }


  //The issue lies in the asynchronous nature of the pool.query function. 
//   The pool.query function is asynchronous, and the subsequent code is 
//   executed before the callback function is invoked.

// To solve this, you can convert the pool.query calls into promises 
// and use async/await to ensure that the code execution waits for the 
// queries to complete before proceeding.

// Here's an updated version of the code that uses async/await with promises:







