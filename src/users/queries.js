const createAbsence = "INSERT INTO absences (employee, start_day, end_day) VALUES ($1, $2, $3)";
const reviewAbsenceRequestsManager = "SELECT * FROM absences";
const viewAbsenceRequests = "SELECT * FROM absences WHERE employee = $1";
const addUsers = "INSERT INTO users (name, email, password, rol, absences, department) VALUES ($1, $2, $3, $4, $5, $6)";
const removeUsers = "DELETE FROM users WHERE user_id = $1";


module.exports = {
    createAbsence,
    viewAbsenceRequests,
    reviewAbsenceRequestsManager,
    addUsers,
    removeUsers
};