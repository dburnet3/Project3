const path = require("path");
const router = require("express").Router();
const activities = require("./activities");
const login = require("./login");
const logout = require("./logout");
const post = require("./post");
const puc = require("./puc");
const signup = require("./signup");

// Move this file into your api folder
// Move this file into your api folder
// then add all of your API routes
//API Routes
//API Routes
router.use("/api/activities", activities); //<- like this

// router.use("/api/login", login);

// router.use("api/logout", logout);

router.use("/api/post", post);

router.use("/api/puc", puc);

// router.get("/api/puc", function (req, res) {
//     res.json({});
// });
// router.use("/api/signup", signup);

// //If no API routes are hit, send the React app
// router.use("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

module.exports = router;
