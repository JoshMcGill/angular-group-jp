var mongoose = require('mongoose');
var bcrypt = require('bycrypt');
var Schema = mongoose.Schema;

var User = new Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

User.pre('save', function(next){
  var user = this;
  if (!user.isModified('password')) {
    next();
  }

  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});


module.exports = mongoose('User', User);
