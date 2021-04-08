const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    cardOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    cardNumber: {
        type: Number,
    },
    nameOnCard: {
        type: String,
    },
    expirationDate: {
        type: Date,
    },
    securityCode: {
        type: Number,
    },
}, { timestamps : true})

module.exports.Payment = mongoose.model('Payment', PaymentSchema);