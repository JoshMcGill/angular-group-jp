var express = require('express');
var userRouter = express.Router();
var User = require('../models/users');

userRouter.route('/:userId')
    .get(function (req, res) {
        User.findById( req.params.userId, function (err, user) {
            if (err) res.status(500).send(err);
            res.send(user);
        });
    })
    .put(function (req, res){
        User.findOneAndUpdate({ id: req.params.userId }, req.body, {new: true}, function(err, user){
            if (err) res.status(500).send(err);
            res.send(user);
        })
    })
    .delete(function (req, res){
        Recipe.findOneAndRemove({ id: req.params.userId }, function(err, user){
            if (err) res.status(500).send(err);
            res.send(user);
        })
    });

    userRouter.route('/')
      .get(function (req, res) {
          User.findById( req.user._id, function (err, user) {
              if (err) res.status(500).send(err);
              res.send(user);
          });
      })


    module.exports = userRouter;
