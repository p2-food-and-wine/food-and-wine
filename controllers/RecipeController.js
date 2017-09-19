const Recipe = require("../models/Recipe")

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
      avatar: req.body.avatar,
      type: req.body.type,
      ingredient: req.body.ingredient,
      description: req.body.description


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
      type,
      description,
      ingredient,
      avatar
    } = req.body
    const updates = {
      name,
      type,
      description,
      ingredient,
      avatar
    }
    Recipe.findByIdAndUpdate(req.params.id, updates, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/recipes/recipe/${result._id}`);
    });
  },
}
