const { Transaction } = require('../models/Transaction.model');

module.exports.createTransaction = (req, res) => {
    Transaction.create(req.body)
        .then(transaction => res.json(transaction))
        .catch(err => res.status(400).json(err))
}

module.exports.getOneTransaction = (req, res) => {
    Transaction.find({_id: req.params.id})
        .then(transaction => res.json(transaction))
        .catch(err => res.json(err))
}