const Pool = require('pg').Pool;

const pool = new Pool({
    user: "vicrodri",
    host: "localhost",
    database: "hickathonapp",
    port : 5432,
});

module.exports = pool;