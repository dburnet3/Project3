const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Puc
            .create({
                puc_name: req.body.puc_name
            })
            .then(dbPuc => res.json(dbPuc))
            .catchc(err => res.status(422).json(err));
    }
};