const Pool = require ("pg").Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "cruds",
    password: 'Jesusisthekey7&',
    port: 5432,
})

export default pool




