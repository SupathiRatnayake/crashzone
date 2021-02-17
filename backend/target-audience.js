const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Outfit = require('Outfit');

let TargetAudience = new Schema({
  categoryId: {
    type: String
  },

  minAge: {
    type: Number,
    min: 12,
    max: 120
  },

  maxAge: {
    type: Number;
  },

  occupation: {
    type: String
  },

  gender: {
    type: String
  },

  preferedOutfits: [Outfit]

});

module.exports = mongoose.model('TargetAudience', TargetAudience);
