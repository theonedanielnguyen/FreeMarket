const { User } = require('../models/User.model');
const bcrypt = require('bcrypt');

module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}

module.exports.getOneUser = (req, res) => {
    User.find({_id: req.params.id})
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.loginUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email})
        .then(user => {
            if (!user) {
                return (res.status(404).json({notInDatabase: "Email was not found in the database"}))
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        return (res.json(user))
                    }
                    else {
                        return (res.status(400).json({mismatch: "Email and password match not found in database"}))
                    }
                })
        })
        .catch(err => res.json(err))
}