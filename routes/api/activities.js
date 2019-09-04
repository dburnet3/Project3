const router = require("express").Router();
const activitiesController = require("../../controllers/activitiesController.js");

//Matches wtih '/api/activities'.

router.route("/")
    .post(activitiesController.create)
    .get(activitiesController.findAll)



//Matches with "/api/activities:id"
router
    .route("/:id")
    .put(activitiesController.findOne);


module.exports = router;