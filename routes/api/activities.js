const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesController.js");

//Matches wtih '/api/activities'.

router.route("/")
    .post(activitiesController.create)
    .get(activitiesController.findAll)
    .put(activitiesController.update);

module.exports = router;