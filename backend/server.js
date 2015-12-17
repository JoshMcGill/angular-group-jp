var express = require('express');
var app = express();

var mongoose = require('mongoose');
var morgan = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('./config');
var db = mongoose.connect(config.connection);

var port = process.env.PORT || 5000;
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', expressJwt({secret: config.secret}));
app.use('/api/recipe', require('./routes/recipeRoutes'));
app.use('/auth', require('./routes/authRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.listen(port, function(){
  console.log('Now being served on port ' + port + '.');
})
