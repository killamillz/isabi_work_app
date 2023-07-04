"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedcrud = exports.deletecrud = exports.postcrud = exports.createcrudById = exports.createcrud = void 0;
const queries = require("../queries");
const db_1 = __importDefault(require("../db"));
//GET REQUEST
const createcrud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getStudentQuery = db_1.default.query(queries.getcruds);
        const getStudent = yield getStudentQuery;
        res.status(200).json(getStudent.rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("An ERROR has occurred");
    }
});
exports.createcrud = createcrud;
// export const createcrud = async (req:Request, res: Response) => {
//     pool.query(queries.getcruds, (error:any, results:any) => {
//         if (error){
//             throw error;
//         } 
//         res.status(200).json(results.rows)
//     })
// }
//GET REQUEST BY ID
const createcrudById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const getStudentQueryById = db_1.default.query(queries.getcrudsById, [id]);
        const getStudent = yield getStudentQueryById;
        res.status(200).json(getStudent.rows);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("An ERROR has occurred");
    }
});
exports.createcrudById = createcrudById;
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
const postcrud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const name = req.body.name;
        const getStudentQuery = db_1.default.query(queries.getcrudsByEmail, [email]);
        const getStudentResult = yield getStudentQuery;
        const nostudent = getStudentResult.rows.length;
        console.log(nostudent);
        if (nostudent > 0) {
            res.send("Student already exists in the database");
            return;
        }
        else if (nostudent === 0) {
            const postStudentQuery = db_1.default.query(queries.postupdatecrud, [name, email]);
            yield postStudentQuery;
            res.status(200).send("Student created successfully");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error has occurred');
    }
});
exports.postcrud = postcrud;
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
const deletecrud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const getStudentQuery = db_1.default.query(queries.getcrudsById, [id]);
        const getStudentResult = yield getStudentQuery;
        const nostudent = !getStudentResult.rows.length;
        console.log(nostudent);
        if (nostudent) {
            res.send("Student does not exist in the database");
            return;
        }
        const deletdEmailQuery = db_1.default.query(queries.deletecrudpost, [id]);
        yield deletdEmailQuery;
        res.status(200).send("Student has successfully been deleted");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});
exports.deletecrud = deletecrud;
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
const updatedcrud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const name = req.body.name;
        const email = req.body.email;
        const getStudentQuery = db_1.default.query(queries.getcrudsById, [id]);
        const getStudentResult = yield getStudentQuery;
        const nostudent = !getStudentResult.rows.length;
        if (nostudent) {
            res.send("Student does not exist in the database");
            return;
        }
        const updateNameQuery = db_1.default.query(queries.updatescrud, [name, id]);
        yield updateNameQuery;
        const updateEmailQuery = db_1.default.query(queries.updatescrudemail, [email, id]);
        yield updateEmailQuery;
        res.status(200).send("Student details have been UPDATED successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});
exports.updatedcrud = updatedcrud;
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
