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
exports.loginuser = exports.createuser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt")); // to encrypt the user password in the database
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../db");
const uservalidation_1 = require("../validator/uservalidation");
const queries = require("../queries");
const createuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const phone_number = req.body.phone_number;
        const password = req.body.password;
        const email = req.body.email;
        const userData = req.body;
        const error = uservalidation_1.userSchema.safeParse(userData);
        console.log("ERROR", error);
        if (error.success === false) {
            res.status(400).send({
                status: "failed",
                message: error.error.issues[0].message
            });
            return;
        }
        const getUsersQuery = db_1.pool.query(queries.getusersByEmail, [email]);
        const getUsersResult = yield getUsersQuery;
        const no_user = getUsersResult.rows.length;
        if (no_user > 0) {
            res.send("Email already in use");
            return;
        }
        else if (no_user === 0) {
            const saltLength = 10;
            const hashedPassword = yield bcrypt_1.default.hash(password, saltLength);
            const postUserQuery = db_1.pool.query(queries.createusers, [username, email, phone_number, hashedPassword]);
            yield postUserQuery;
            res.status(200).send("USER created successfully");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error has occurred');
    }
});
exports.createuser = createuser;
const loginuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const phone_number = req.body.phone_number;
        const password = req.body.password;
        const getUsersQuery = db_1.pool.query(queries.getusersByEmail, [email]);
        const getUsersResult = yield getUsersQuery;
        const no_user = getUsersResult.rows.length;
        if (no_user === 0) {
            res.send("Account does not exist");
            return;
        }
        else if (no_user === 1) {
            const userpassword = getUsersResult.rows[0].password;
            const validate = yield bcrypt_1.default.compare(password, userpassword);
            if (validate) {
                const jwtname = getUsersResult.rows[0].username;
                const payload = { username: jwtname };
                const token = jsonwebtoken_1.default.sign(payload, "NosaObasuyi");
                return res.status(200).json({
                    message: "LOGIN SUCCESSFUL",
                    username: email,
                    token
                });
            }
            else {
                res.send("Login DETAILS does not match");
            }
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error has occurred');
    }
});
exports.loginuser = loginuser;
