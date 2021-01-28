const { Payment } = require('../models/Payment.model');

module.exports.createPayment = (req, res) => {
    Payment.create(req.body)
        .then(payment => res.json(payment))
        .catch(err => res.json(err))
}

module.exports.getOnePayment = (req, res) => {
    Payment.find({_id: req.params.id})
        .then(payment => res.json(payment))
        .catch(err => res.json(err))
}

module.exports.updatePayment = (req, res) => {
    Payment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(payment => res.json(payment))
        .catch(err => res.json(err))
}