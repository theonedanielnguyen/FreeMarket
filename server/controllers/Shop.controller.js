const { Shop } = require('../models/Shop.model');

module.exports.createShop = (req, res) => {
    Shop.create(req.body)
        .then(shop => res.json(shop))
        .catch(err => res.json(err));
}

module.exports.getOneShop = (req, res) => {
    Shop.find({_id: req.params.id})
        .then(shop => res.json(shop))
        .catch(err => res.json(err));
}

module.exports.updateShop = (req, res) => {
    Shop.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(shop => res.json(shop))
        .catch(err => res.json(err));
}