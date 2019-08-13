const router = require("express").Router();
const db = require("../models");
const passport = require("../config/passport");


//retrieve all
router.get("/api/provision", async (req, res) => res.json((await db.provision.findAll({}))));

router.post("/api/provision", (req, res) => res.json({}));

//1. Account (CR) -- This is for the primary caretaker.  The PC will be able to send out random codes to SC's via the account management page.
//---post route for signing up the user---//
router.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(function () {
        res.redirect(301, "/api/login");
    }).catch(function (err) {
        console.log(err);
        res.json(err);
    });
});

//---post route to send user to authenticate user and send to the accountSetup page
router.post("api/login", passport.authenticate("local"), function (req, res) {

    res.json("/accountSetup")
});

//---get route to log user out of their account---//
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});


//2. Activity (U)
//---get route for updating activity information---//
router.put("api/activities", function (req, res) {
    db.Activity.update(req.body,
        {
            where: {
                id: req.body.id
            }
        })
        .then(function (dbActivity) {
            res.json(dbActivity);
        });
});

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


module.exports = router;