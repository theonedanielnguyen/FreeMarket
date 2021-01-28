const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    cardOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    cardNumber: {
        type: Number,
        required: [true, 'Please enter a card number']
    },
    expirationDate: {
        type: Date,
        required: [true, "Please enter an expiration date"]
    },
    securityCode: {
        type: Number,
        required: [true, "Please enter a security code"]
    },
}, { timestamps : true})

module.exports.Payment = mongoose.model('Payment', PaymentSchema);