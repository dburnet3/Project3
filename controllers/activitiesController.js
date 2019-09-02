const db = require("../models");

//Defining methods for the activitiesController

module.exports = {
    findAll: function (req, res) {
        db.Activity
            .findAll(req.query)
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    },
    findOneAndUpdate: function (req, res) {
        db.Activity
        // .update({ _id: req.params.id }, { where: req.body })
        // .update(req.body, {
        //     where: {
        //         title: req.body.title,
        //         time_slots: req.body.time_slots,
        //         dow: req.body.dow,
        //         taken: req.body.taken
        //     }
        // })
        findOneAndUpdate({ _id: req.params.id }, req.body)
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