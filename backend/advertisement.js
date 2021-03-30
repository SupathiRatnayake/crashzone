const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TargetAudience = require('TargetAudience');

let Advertisement = new Schema({
  adName: {
    type: String
  },

  targetAudiences:  [TargetAudience],

  sourceImg: {
    type: String;
  }

});

module.exports = mongoose.model('Advertisement', Advertisement);
