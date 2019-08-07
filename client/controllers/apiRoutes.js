const router = require("express").Router();
const db = require("../models");

//retrieve all
router.get("/api/provision", async (req, res) => res.json((await db.provision.findAll({}))));

router.post("/api/provision", (req, res) => res.json({}));

//1. Account (CRUD)
//2. Activity (CRUD)
//3. Discussion Post (CRUD)
//---get route for getting all discussion posts---//
router.get("/api/posts/", function (req, res) {
    db.Post.findAll({})
        .then(function (dbPost) {
            res.json(dbPost);
        });
});

//---post route for saving discussion post---//
router.post("/api/posts/", function (req, res) {
    console.log(req.body);
    db.Post.create({
        title: req.body.title,
        body: req.body.body

    })
        .then(function (dbPost) {
            res.json(dbPost);
        });
});

//---delete route for deleting posts---//
router.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(function (dbPost) {
            res.json(dbPost);
        });
});

//---put route for updating posts---//
router.put("api/posts", function (req, res) {
    db.Post.update(req.body,
        {
            where: {
                id: req.body.id
            }
        })
        .then(function (dbPost) {
            res.json(dbPost);
        });
});

//4. Login / Logout

module.exports = router;