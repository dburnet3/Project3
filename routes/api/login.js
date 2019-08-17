const router = require("express").Router();
const signupController = require("../../controllers/signupController");

//Matches wtih '/api/login'
router.route("/")
    .post(signupController.create)

router.route("/:id")
    .get(signupController.findOne);

module.exports = router;