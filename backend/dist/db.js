"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "cruds",
    password: 'Jesusisthekey7&',
    port: 5432,
});
exports.default = pool;
