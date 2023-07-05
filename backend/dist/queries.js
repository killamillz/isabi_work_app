"use strict";
// export const getcruds = "SELECT * FROM cruds";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getprofileBySkill = exports.getusersBylastname = exports.postprofile = exports.getuserprofile = exports.createusers = exports.getusersByEmail = exports.getusers = void 0;
// export const getcrudsById = "SELECT * FROM cruds WHERE id = $1";
// export const getcrudsByEmail = "SELECT * FROM cruds WHERE email = $1";
// export const postupdatecrud = "INSERT INTO cruds (name, email) VALUES ($1, $2)";
// export const deletecrudpost = "DELETE FROM cruds WHERE id = $1"
// export const updatescrud = "UPDATE cruds SET name = $1 WHERE id = $2"
// export const updatescrudemail = "UPDATE cruds SET email = $1 WHERE id = $2"
//CREATE USER AND LOGIN
exports.getusers = "SELECT * FROM userdata";
exports.getusersByEmail = "SELECT * FROM userdata WHERE email = $1";
exports.createusers = "INSERT INTO userdata (username, email, phone_number, password) VALUES ($1, $2, $3, $4)";
//USER PROFILE
exports.getuserprofile = "SELECT * FROM usersdatabase";
exports.postprofile = "INSERT INTO usersdatabase (first_name, last_name, email_address, phone_number, age, skill, description, city, state, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
exports.getusersBylastname = "SELECT * FROM usersdatabase WHERE last_name = $1";
exports.getprofileBySkill = "SELECT * FROM usersdatabase WHERE skill = $1";
