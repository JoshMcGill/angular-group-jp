var express = require('express');
var recipeRouter = express.Router();
var mongoose = require('mongoose');
var Recipe = require('../models/recipes');


recipeRouter.route('/')
  .get(function(req, res){
    Recipe.find( { $or: [{user: req.user._id }, {added: req.user._id}]}, function(err, recipes){
      if (err) {
        res.status(500).send(err);
      }
      res.send(recipes);
    });
  })
  .post(function(req, res){
    var recipe = new Recipe(req.body);
    recipe.user = req.user;
    recipe.save(function(err) {
      if (err) {
        res.status(500).send(err);
      }
      res.send(recipe);
    })
  });

  recipeRouter.route('/following')
    .get(function(req, res){
      Recipe.find({ user : {$in: req.user.following} }, function(err, recipes){
        if (err) {
          res.status(500).send(err);
        }
        res.send(recipes);
      });
    });

  recipeRouter.route('/:recipeId')
      .get(function (req, res) {
          Recipe.findOne({id: req.params.recipeId, user: req.user._id}, function (err, recipe) {
              if (err) res.status(500).send(err);
              res.send(recipe);
          });
      })
      .put(function (req, res){
          Recipe.findOneAndUpdate({id: req.params.recipeId, user: req.user._id}, req.body, {new: true}, function(err, recipe){
              if (err) res.status(500).send(err);
              res.send(recipe);
          })
      })
      .delete(function (req, res){
          Recipe.findOneAndRemove({id: req.params.recipeId, user: req.user._id}, function(err, recipe){
              if (err) res.status(500).send(err);
              res.send(recipe);
          })
      });

module.exports = recipeRouter;
