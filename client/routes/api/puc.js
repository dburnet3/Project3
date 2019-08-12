const router = require("express").Router();
const pucController = require("../../controllers/pucController");

//Matches wtih '/api/puc'

router.route("/")
    .post(pucController.create);

module.exports = router;