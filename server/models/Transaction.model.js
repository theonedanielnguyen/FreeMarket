const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    buyer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    items: {
        type: Map,
        of: Array
    },
    total: {
        type: Number,
    }
}, { timestamps : true });

module.exports.Transaction = mongoose.model('Transaction', TransactionSchema);