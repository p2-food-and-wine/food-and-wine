const Recipe  = require("../models/Recipe")
const multer  = require('multer')
const image= multer({ dest: './public/images/' })

module.exports = {
  index: (req, res, next) => {
    Recipe.find({}).then(recipes => {
      res.render('recipes/recipes', {
        title: 'List Of Recipes',
        recipes: recipes
      });
    })
  },
  new: (req, res, next) => {
    res.render('recipes/create')
  },

  create: (req, res, next) => {
    const newRecipe = new Recipe({
      name: req.body.name,
      avatar: `/images/${req.file.filename}`,
      type: req.body.type,
      ingredient: req.body.ingredient,
      preparacion: req.body.preparacion

    })
    newRecipe.save((err) => {
      if (err) {
        return err;
      } else {
        return res.redirect("/recipes");
      }
    });
  },

  show: (req, res, next) => {
    Recipe.findById(req.params.id).then(recipe => {
      res.render('/recipe/show')
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


  edit: (req, res, next) => {
    Recipe.findById(req.params.id, (err, recipe) => {
      if (err) {
        console.log(err);
      }
      res.render('recipes/edit', {
        recipe: recipe
      });
    });
  },

  update: (req, res, next) => {
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
    Recipe.findByIdAndUpdate(req.params.id, updates, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/recipes/recipe/${result._id}`);
    });
  },
}
