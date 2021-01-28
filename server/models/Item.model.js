const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
    },
    name: {
        type: String,
        required: [true, "Please enter an item name"],
    },
    imageURL: {
        type: String,
        required: [true, 'Please provide an image URL'],
    },
    price: {
        type: Number,
        required: [true, "Please enter a price"],
    },
    description: {
        type: String,
        required: [true, "Please enter a description"],
    },
}, { timestamps : true})

module.exports.Item = mongoose.model('Item', ItemSchema);