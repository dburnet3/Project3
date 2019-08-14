const db = require("../models");

//Defining methods for the signupController

module.exports = {
    //to create a user account
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User.findById(req.params.findById)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }

};