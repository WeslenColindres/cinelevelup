const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CinemaSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    branch_office: [
        {
            branch_office_id: {
                type: Schema.ObjectId,
                ref: 'BranchOffice'
            }
        }
    ]
});

module.exports = mongoose.model('Cinema', CinemaSchema);