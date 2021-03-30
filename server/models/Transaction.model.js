const mongoose = require('mongoose');

const Transaction = new mongoose.Schema({
    buyer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    items: {
        type: Map,
        of: Array
    },
}, { timestamps : true });

module.exports.Transaction = mongoose.model('Transaction', TransactionSchema);