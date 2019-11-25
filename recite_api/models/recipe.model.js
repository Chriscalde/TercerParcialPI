const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    recipeName: {
        type: String,
        required: true
    },
    recipeDescription: {
        type: String,
        required: true
    },
    recipeCategory: {
        type: String,
        required: true
    },
    recipeImg: {
        type: String,
        required: true
    }
});

let RecipeModel = mongoose.model('Recipe', recipeSchema, 'recipe')

module.exports = { RecipeModel };