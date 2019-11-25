var express = require('express');
var router = express.Router();

var recipeController = require('../controllers/recipe.controller')

router.post('/create', recipeController.createRecipe);

module.exports = router;