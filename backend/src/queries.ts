export const getcruds = "SELECT * FROM cruds";

export const getcrudsById = "SELECT * FROM cruds WHERE id = $1";

export const getcrudsByEmail = "SELECT * FROM cruds WHERE email = $1";

export const postupdatecrud = "INSERT INTO cruds (name, email) VALUES ($1, $2)";

export const deletecrudpost = "DELETE FROM cruds WHERE id = $1"

export const updatescrud = "UPDATE cruds SET name = $1 WHERE id = $2"

export const updatescrudemail = "UPDATE cruds SET email = $1 WHERE id = $2"







