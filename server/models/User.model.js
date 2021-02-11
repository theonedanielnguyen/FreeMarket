const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter a first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please enter a last name"],
    },
    email: {
        type: String,
        required: [true, "Please enter an email address"],
        minLength: [8, "Your email address must be at least 8 characters long"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [8, "Your password must be at least 8 characters long"]
    },
    streetAddress: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipCode: {
        type: Number,
    },
    payment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment"
    },
    shop_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop",
    },
    createdItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item"
        }
    ],
    cart: {
        total: {type: Number, default: 0},
        items: [{type: [String]}],
    },
}, { timestamps : true});

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
})

module.exports.User = mongoose.model("User", UserSchema);