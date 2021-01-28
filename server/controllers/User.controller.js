const { User } = require('../models/User.model');

module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))
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