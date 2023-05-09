const Pool = require('pg').Pool;

const pool = new Pool({
    user: "vicrodri",
    host: "localhost",
    database: "hickathonapp",
    password: "test",
    port : 5432,
});

module.exports = pool;