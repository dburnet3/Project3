const router = require("express").Router();
const postController = require("../../controllers/postController");

//Matches wtih '/api/post'

router.route("/")
    .get(postController.findAll)
    .post(postController.create);


//Matches with "/api/post:id"
router
    .route("/:id")
    .delete(postController.remove)
    .put(postController.update);


module.exports = router;      