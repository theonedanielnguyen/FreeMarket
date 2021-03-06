const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    imageURL: { 
        type: String,
        default: ""
    },
    description: { 
        type: String,
        default: ""
    },
    itemsSold: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ],
}, { timestamps : true})

module.exports.Shop = mongoose.model("Shop", ShopSchema);