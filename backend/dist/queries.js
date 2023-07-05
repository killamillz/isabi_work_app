"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getprofileBySkill = exports.getusersBylastname = exports.postprofile = exports.getuserprofile = exports.createusers = exports.getusersByEmail = exports.getusers = void 0;
//CREATE USER AND LOGIN
exports.getusers = "SELECT * FROM userdata";
exports.getusersByEmail = "SELECT * FROM userdata WHERE email = $1";
exports.createusers = "INSERT INTO userdata (username, email, phone_number, password) VALUES ($1, $2, $3, $4)";
//USER PROFILE
exports.getuserprofile = "SELECT * FROM usersdatabase";
exports.postprofile = "INSERT INTO usersdatabase (first_name, last_name, email_address, phone_number, age, skill, description, city, state, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
exports.getusersBylastname = "SELECT * FROM usersdatabase WHERE last_name = $1";
exports.getprofileBySkill = "SELECT * FROM usersdatabase WHERE skill = $1";
