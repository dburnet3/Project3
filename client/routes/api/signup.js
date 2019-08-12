const router = require("express").Router();
const signupController = require("../../controllers/signupController");

//Matches wtih '/api/signup'

router.route("/")
    .post(signupController.create);

module.exports = router;