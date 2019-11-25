const Recipe = require('../models/recipe.model').RecipeModel;

async function createRecipe(req, res) {
    let name = req.body.recipeName;
    let description = req.body.recipeDesc;
    let img = req.body.recipeImg;
    let category = req.body.recipeCat;

    let newRecipe = new Recipe({
        recipeName: name,
        recipeDescription: description,
        recipeCategory: category,
        recipeImg: img
    });

    try {
        newObj = await newRecipe.save();
        res.status(200).json({
            err: false,
            message: "Success",
            obj: newObj
        });
    } catch (e) {
        res.status(400).json({
            err: true,
            message: "Failed to store recipe!",
            obj: null
        });
    }
}

async function getByCategories(req, res) {
    Category.find({}, { recipeCategory })
}
module.exports = {
    createRecipe
}