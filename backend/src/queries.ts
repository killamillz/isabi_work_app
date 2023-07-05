
//CREATE USER AND LOGIN
export const getusers = "SELECT * FROM userdata";

export const getusersByEmail = "SELECT * FROM userdata WHERE email = $1";

export const createusers = "INSERT INTO userdata (username, email, phone_number, password) VALUES ($1, $2, $3, $4)";

//USER PROFILE

export const getuserprofile = "SELECT * FROM usersdatabase";

export const postprofile = "INSERT INTO usersdatabase (first_name, last_name, email_address, phone_number, age, skill, description, city, state, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";

export const getusersBylastname = "SELECT * FROM usersdatabase WHERE last_name = $1";

export const getprofileBySkill = "SELECT * FROM usersdatabase WHERE skill = $1";