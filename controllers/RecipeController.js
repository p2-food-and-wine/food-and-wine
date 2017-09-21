const Recipe  = require("../models/Recipe")
const multer  = require('multer')
const image   = multer({ dest: './public/images/' })


module.exports = {
  listRecipes: (req, res, next) => {
    Recipe.find({}).then(recipes => {
      res.render('recipes/recipes', {
        title: 'List Of Recipes',
        recipes: recipes
      });
    })
  },
  newRecipe: (req, res, next) => {
    res.render('recipes/create')

  },

//   searchRecipes: (req, res, next) => {
//     const re = new RegExp(req.params.search, 'i')
//       Recipe.find().or([{ 'name': { $regex: re }}, { 'type': { $regex: re }}]).sort('title', 1).exec(function(err, users) {
//       res.json(JSON.stringify(recipes));
//   });
// },

  createRecipe: (req, res, next) => {
    const newRecipe = new Recipe({
      name       : req.body.name,
      avatar     : `/images/${req.file.filename}`,
      type       : req.body.type,
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
      res.render('recipes/edit', {
        recipe: recipe
      });
    });
  },

  updateRecipe: (req, res, next) => {
    const {
      name,
      avatar,
      type,
      ingredient,
      preparacion,

    } = req.body
    const updates = {
      name,
      avatar,
      type,
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
