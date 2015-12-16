var express = require('express');
var recipeRouter = express.Router();
var mongoose = require('mongoose');
var Recipe = require('../models/recipes');


recipeRouter.route('/')
  .get(function(req, res){
    Recipe.find({ user : req.user._id }, function(err, recipes){
      if (err) {
        res.status(500).send(err);
      }
      res.send(recipes);
    });
  })
  .post(function(req, res){
    var recipe = Recipe(req.body);
    recipe.user = req.user;
    recipe.save(function(err, newRecipe) {
      if (err) {
        res.status(500).send(err);
      }
      res.send(newRecipe);
    })
  });

  dinoRoute.route('/:recipeId')
      .get(function (req, res) {
          Recipe.findOne({id: req.params.recipeId, user: req.user._id}, function (err, recipe) {
              if (err) res.status(500).send(err);
              res.send(recipe);
          });
      })
      .put(function (req, res){
          Dino.findOneAndUpdate({id: req.params.recipeId, user: req.user._id}, req.body, {new: true}, function(err, recipe){
              if (err) res.status(500).send(err);
              res.send(recipe);
          })
  })
      .delete(function (req, res){
          Dino.findOneAndRemove({id: req.params.recipeId, user: req.user._id}, function(err, recipe){
              if (err) res.status(500).send(err);
              res.send(recipe);
          })
  })
