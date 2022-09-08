const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BranchOfficeSchema = new Schema({
    office_location: {
        type: String,
        trim: true
    },
    living_room: [
        {
            living_room: {
                type: String,
                trim: true
            }
        }
    ],
    movies: [
        {
            movie_id: {
                type: Schema.ObjectId,
                ref: 'Movie'
            }
        }
    ],
    precio: [
        {
            price: {
                type: Number,
                trim: true
            },
            age_status: {
                type: String,
                trim:true
            }
        }
    ]

});

module.exports = mongoose.model('BranchOffice', BranchOfficeSchema);