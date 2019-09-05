const db = require("../models");

//Defining methods for the activitiesController

module.exports = {
    findAll: function (req, res) {
        db.Activity
            .findAll(req.query)
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Activity
            .findOne({ where: { id: req.params.id } }, req.body.taken)
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