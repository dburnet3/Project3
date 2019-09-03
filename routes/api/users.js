const router = require("express").Router();
const userController = require("../../controllers/userController");

//Matches wtih '/api/user'

router.route("/register")
    .post(userController.create);

router.route("/login")
    .post(userController.create);

router
    .route("/:id")
    .get(userController.findOne);


module.exports = router;