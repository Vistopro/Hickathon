const loginUser = "SELECT * FROM users WHERE email = $1 AND password = $2";
const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE user_id = $1";
const createAbsence = "INSERT INTO absences (employee,start_day, end_day) VALUES ($1, $2, $3)";
const reviewAbsenceRequestsManager = "SELECT * FROM absences";
const viewAbsenceRequests = "SELECT * FROM absences WHERE employee = $1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1";
const addUsers = "INSERT INTO users (name, email, password, rol, absences, department) VALUES ($1, $2, $3, $4, $5, $6)";
const removeUsers = "DELETE FROM users WHERE user_id = $1";
const editUsers =  "UPDATE users SET name = $1, email=$2, password=$3, rol=$4, absences=$5, department= $6 WHERE user_id=$7 RETURNING *";
const deleteAbsence = "DELETE FROM absences WHERE employee = $2 AND status= 'pending' AND absence_id = $1";
const editAbsence =  "UPDATE absences SET start_day=$2, end_day=$3  WHERE employee = $1 AND absence_id=$4 RETURNING *";
const getAbsenceById = "SELECT * FROM absences WHERE absence_id = $1";
const editStatus =  "UPDATE absences SET status = $2 WHERE absence_id=$1 RETURNING *";

module.exports = {
    loginUser,
    createAbsence,
    viewAbsenceRequests,
    checkEmailExists,
    reviewAbsenceRequestsManager,
    addUsers,
    editUsers,
    editAbsence,
    removeUsers,
    getUsers,
    deleteAbsence,
    getAbsenceById,
    editStatus,
    getUserById
};