const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesController.js");

//Matches wtih '/api/activities'.

router.route("/")
    .put(activitiesController.update);

module.exports = router;