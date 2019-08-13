const db = require("../models");

//Defining methods for the postController

module.exports = {
    findAll: function (req, res) {
        db.Posts
            .find(req.query)
            .then(dbPosts => res.json(dbPosts))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Post
            .create({
                post_title: req.body.title,
                post_body: req.body.body

            })
            .then(dbPosts => res.json(dbPosts))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Post
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbPosts => res.json(dbPosts))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Post
            .findById({ _id: req.params.id })
            .then(dbPosts => dbPosts.remove())
            .then(dbPosts => res.json(dbPosts))
            .catch(err => res.status(422).json(err));
    }

};