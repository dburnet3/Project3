const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Puc
            .create(req.body)
            .then(dbPuc => res.json(dbPuc))
            .catch(err => res.status(422).json(err));
    }
};