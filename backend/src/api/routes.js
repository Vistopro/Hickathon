const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.post("/user", controller.loginUser);
router.post("/users/:id_user", controller.createAbsence);
router.get("/users/:id_user", controller.viewAbsenceRequests);
router.put("/users/:id_user/:id", controller.editAbsence);
router.delete("/users/:id_user/:id", controller.deleteAbsence);
router.get("/manager/absences", controller.reviewAbsenceRequestsManager);
router.delete("/manager/users/:id_user", controller.removeUsers);
router.put("/manager/users/:id_user", controller.editUsers);
router.post("/manager/users", controller.addUsers);
router.get("/manager/users", controller.getUsers);
router.put("/manager/absences/:id", controller.editStatus);

module.exports = router;
