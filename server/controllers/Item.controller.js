const { Item } = require('../models/Item.model');

module.exports.createItem = (req, res) => {
    Item.create(req.body)
        .then(item => res.json(item))
        .catch(err => res.json(err))
}

module.exports.getOneItem = (req, res) => {
    Item.find({_id: req.params.id})
        .then(item => res.json(item))
        .catch(err => res.json(err))
}

module.exports.updateItem = (req, res) => {
    Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(item => res.json(item))
        .catch(err => res.json(err))
}

module.exports.getAllItems = (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.json(err))
}

module.exports.getItemCount = (req, res) => {
    Item.count()
        .then(count => res.json(count))
        .catch(err => res.json(err))
}

module.exports.random = (req, res) => {
    Item.aggregate([{$sample: {size:parseInt(req.params.num)}}])
        .then(selection => res.json(selection))
        .catch(err => res.json(err))
}