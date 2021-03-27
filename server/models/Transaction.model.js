const mongoose = require('mongoose');

const Transaction = new mongoose.Schema({
    buyer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
    ],
}, { timestamps : true });

module.exports.Transaction = mongoose.model('Transaction', TransactionSchema);