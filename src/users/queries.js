const reviewAbsenceRequestsManager = "SELECT * FROM absences";
const viewAbsenceRequests = "SELECT * FROM absences WHERE user_id = $1";


module.exports = {
    viewAbsenceRequests,
    reviewAbsenceRequestsManager,
};