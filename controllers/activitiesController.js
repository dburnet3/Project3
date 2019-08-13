const db = require("../models");

//Defining methods for the activitiesController

module.exports = {
    update: function (req, res) {
        db.Activity
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbActivity => res.json(dbActivity))
            .catch(err => res.status(422).json(err));
    }
};