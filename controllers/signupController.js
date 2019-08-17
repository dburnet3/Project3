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
    findOne: function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }

};