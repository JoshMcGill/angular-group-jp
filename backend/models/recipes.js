var mongoose = require('mongoose');
var user = require('./user').schema;

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
  visible: {
    type: Boolean,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose('Recipes', Recipe);
