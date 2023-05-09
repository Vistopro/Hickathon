const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.post("/users/:id", controller.createAbsence);
router.get("/users/:id", controller.viewAbsenceRequests);
// router.get("/", controller.editAbsence);
// router.get("/", controller.deleteAbsence);
router.get("/manager", controller.reviewAbsenceRequestsManager);
router.delete("/manager/:id", controller.removeUsers);
// router.put("/:id", controller.editUsers);
router.post("/manager", controller.addUsers);

module.exports = router;
