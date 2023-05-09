const pool = require('../../db');
const queries = require('./queries');

const createAbsence = (req, res) => {
    const {employee, start_day, end_day} = req.body; 
    pool.query(queries.createAbsence,[employee, start_day, end_day], (error, results) => {
        if(error) throw error;
        res.status(201).send("Absence created successfully!");
    });
};

const viewAbsenceRequests = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.viewAbsenceRequests,[id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const reviewAbsenceRequestsManager = (req, res) => {
   
    pool.query(queries.reviewAbsenceRequestsManager,  (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUsers = (req, res) => {
    const {name, email, password, rol, absences, department} = req.body;
    pool.query(queries.addUsers,[name, email, password, rol, absences, department], (error, results) => {
        if(error) throw error;
        res.status(201).send("User added successfully!");
    });
};

const removeUsers = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeUsers,[id], (error, results) => {
        if(error) {
            console.error("Error deleting user", error);
            res.status(500).send("Internal server error");
            return
        }
        res.status(200).send('User removed successfully!: ${id}');
    });    
 };


        // const editUsers = (req, res) => {
//     const {user_id} = req.body;
//     pool.query(queries.editUsers,[name, email, password, rol, absences, department], (error, results) => {
//         if(error) throw error;
//         res.status(201).send("User removed successfully!");
//     });
// };

module.exports = {
    createAbsence,
    viewAbsenceRequests,
    // editAbsence,
    // deleteAbsence,
    reviewAbsenceRequestsManager,
    removeUsers,
    // editUsers,
    addUsers,
};