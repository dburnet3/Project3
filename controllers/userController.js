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
    },

    // Find user by email
    findOne: function (req, res) {
        db.User.findOne({
            where: {
                email: req.params.email
            }
        })
            .then(dbUser => {
                if (!user) {
                    return res.status(404).json({ emailnotfound: "Email not found" });
                }
                // Check password
                bcrypt.compare(password, user.password).then(isMatch => {
                    if (isMatch) {
                        // User matched
                        // Create JWT Payload
                        const payload = {
                            id: user.id,
                            name: user.name
                        };
                        // Sign token
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {
                                expiresIn: 31556926 // 1 year in seconds
                            },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    } else {
                        return res
                            .status(400)
                            .json({ passwordincorrect: "Password incorrect" });
                    }
                });
            });

    }


};