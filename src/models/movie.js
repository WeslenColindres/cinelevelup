const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name:{
    type: String,
    trim: true
  },
  working_hours: [
    {
        hour: {
            type: String,
        }
    }
  ]
});

module.exports = mongoose.model( 'Movie' , MovieSchema );