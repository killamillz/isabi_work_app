"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.pool = void 0;
const Pool = require("pg").Pool;
exports.pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "userdata",
    password: 'Jesusisthekey7&',
    port: 5432,
});
exports.profile = new Pool({
    user: "postgres",
    host: "localhost",
    database: "usersdatabase",
    password: 'Jesusisthekey7&',
    port: 5432,
});
