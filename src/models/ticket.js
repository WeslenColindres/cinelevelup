const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    cinema_name: {
        type: String,
        trim: true
    },
    office_location: {
        type: String,
        trim: true
    },
    name_movie: {
        type: String,
        trim: true
    },
    purchase_date: {
        type: Date,
        default: Date.now()
    },
    time_function: {
        type: Date,
        trim: true
    },
    living_room: {
        type: String,
        trim: true
    },
    seat: {
        type: String,
        trim: true
    },
    purchase_data: [
        {
            ticket_amount: {
                type: Number,
                trim: true
            },
            age_status: {
                type: String,
                trim: true
            },
            price: {
                type: Number,
                trim: true
            }
        }
    ],
    payment_method: {
        type: String,
        trim: true
    },
    conunt: {
        type: Number,
        trim: true
    }
});

module.exports = mongoose.model('Ticket', TicketSchema);