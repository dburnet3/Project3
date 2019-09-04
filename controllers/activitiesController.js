const db = require("../models");

//Defining methods for the activitiesController

module.exports = {
    findAll: function (req, res) {
        db.Activity
            .findAll(req.query)
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        console.log("hello---------------work-------------please------------");
        console.log(req);
        console.log(req.params.id);
        console.log(req.body);
        db.Activity
            .find({ id: req.params.id }, req.body)
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Activity
            .create(req.body)
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    }
};