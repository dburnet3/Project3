const db = require("../models");

//Defining methods for the postController

module.exports = {
    findAll: function (req, res) {
        db.Post
            .findAll(req.query)
            .then(dbPost => res.json(dbPost))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Post
            .create(req.body)
            .then(dbPost => res.json(dbPost))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Post
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbPost => res.json(dbPost))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Post
            .findById({ _id: req.params.id })
            .then(dbPost => dbPost.remove())
            .then(dbPost => res.json(dbPost))
            .catch(err => res.status(422).json(err));
    }

};