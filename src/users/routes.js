const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// router.get("/", controller.createAbsence);
router.get("/:id", controller.viewAbsenceRequests);
// router.get("/", controller.editAbsence);
// router.get("/", controller.deleteAbsence);
router.get("/", controller.reviewAbsenceRequestsManager);
// router.get("/", controller.removeUsers);
// router.get("/", controller.editUsers);
// router.get("/", controller.addUsers);

module.exports = router;
