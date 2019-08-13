const db = require("../models");

//Defining methods for the signupController

module.exports = {
    //to create a user account
    create: function (req, res) {
        db.User
            .create({
                user_type: req.body.user_type,
                user_name: req.body.user_name,
                user_email: req.body.user_email,
                user_password: req.body.user_password
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User.findById(req.params.findById)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }

};