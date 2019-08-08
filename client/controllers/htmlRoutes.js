const router = require("express").Router();
const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

//---Route for main path/homepage---//
router.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html")));

//---Route to redirect the user after login---//
router.get("/login", function (req, res) {
    if (req.user) {
        res.redirect("/activities");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

//---Route to redirect the user after signup---//
router.get("/signup", function (req, res) {
    if (req.user) {
        res.redirect("/account");
    }
    res.sendFile(path.join(__dirname, "../public/account.html"));
});

//---Route to direct the user to the account management page---//
router.get("/account", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/account.html")));

//---Route to direct the user to the activities page once authenticated---//
router.get("/activities", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/activities.html"));
});

module.exports = router;