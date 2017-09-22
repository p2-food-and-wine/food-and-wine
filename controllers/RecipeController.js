const Recipe = require("../models/Recipe")
const multer = require('multer')
const image = multer({ dest: './public/images/' })
const dishOrder = require("../models/DishOrder")
const IngredientP = require("../models/Ingredient")

module.exports = {
  listRecipes: (req, res, next) => {
    Recipe.find({}).then(recipes => {
      res.render('recipes/recipes', {
        title: 'List Of Recipes',
        recipes: recipes,
        dishOrder: dishOrder,
        ingredientP: IngredientP
      });
    })
  },
  newRecipe: (req, res, next) => {
    res.render('recipes/create', { dishOrder: dishOrder, principalIngredient: IngredientP })
  },
  createRecipe: (req, res, next) => {
    const newRecipe = new Recipe({
      name       : req.body.name,
      avatar     : `/images/${req.file.filename}`,
      comments   : req.body.comments,
      type       : req.body.type,
      principalIngredient: req.body.principalIngredient,
      ingredient : req.body.ingredient,
      preparacion: req.body.preparacion,
      author     : req.user._id

    })
    newRecipe.save((err) => {
      if (err) {
        return err;
      } else {
        return res.redirect("/recipes");
      }
    });
  },

  showRecipe: (req, res, next) => {
    Recipe.findById(req.params.id).then(recipe => {
      res.render('recipes/show', {recipe} )
    })
  },

  commentRecipe: (req, res, next) => {
    Recipe.findById(req.params.id).then(recipe => {
      res.render('show', {recipe} )
    })
  },

  delete: (req, res, next) => {
    Recipe.findByIdAndRemove(req.params.id, (err, obj) => {
      if (err) {
        return next(err);
      }
      res.redirect("/recipes");
    });
  },


  getEdit: (req, res, next) => {

    Recipe.findById(req.params.id, (err, recipe) => {
      if (err) {
        console.log(err);
      }
      res.render('recipes/edit', {recipe:recipe ,
              dishOrder: dishOrder,
              principalIngredient: IngredientP} )

    });
  },

  updateRecipe: (req, res, next) => {
    const {
      name,
      avatar,
      comments,
      type,
      principalIngredient,
      ingredient,
      preparacion,

    } = req.body
    const updates = {
      name,
      avatar,
      comments,
      type,
      principalIngredient,
      ingredient,
      preparacion,

    }
    console.log(updates)
    Recipe.findByIdAndUpdate(req.params.id, updates, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/recipes`);
    });
  },
}
