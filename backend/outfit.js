const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Outfit = new Schema({
  outfitId: {
    type: String
  },
  OutfitName: {
    type: String
  }

});

module.exports = mongoose.model('Outfit', Outfit);
