var mongoose = require('mongoose');
var user = require('./users').schema;

var Schema = mongoose.Schema;

var Recipe = new Schema({
  name: {
    required: true,
    type: String
  },
  ingredients: {
    required: true,
    type: [String],
  },
  directions: {
    required: true,
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  added: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  }
});

module.exports = mongoose.model('Recipes', Recipe);
