const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: true
    },
    last_name: {
        type: String,
        trim: true,
        required: true
    },
    identifier: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    payment_method: [
        {
            credito: {
                type: Number,
                default: 100
            }
        },
        {
            payment_type: {
                type: String,
                trim: true
            },
            card_name: {
                type: String,
                trim: true
            },
            last_digits_card: {
                type: Number,
                trim: true
            },
            card_number: {
                type: Number,
                trim: true
            },
            card_type: {
                type: String,
                trim: true
            },
            card_expiration_dates: {
                type: Date,
                trim: true
            }
        }
    ]
});

module.exports = mongoose.model( 'User' , UserSchema );