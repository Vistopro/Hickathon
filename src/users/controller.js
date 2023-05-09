const pool = require('../../db');
const queries = require('./queries');


const viewAbsenceRequests = (req, res) => {
    pool.query(queries.viewAbsenceRequests, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const reviewAbsenceRequestsManager = (req, res) => {
    pool.query(queries.reviewAbsenceRequestsManager, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    // createAbsence,
    viewAbsenceRequests,
    // editAbsence,
    // deleteAbsence,
    reviewAbsenceRequestsManager,
    // removeUsers,
    // editUsers,
    // addUsers,
};