const Recipe = require("../models/Recipe")


module.exports = {
  index: (req, res, next) => {
    res.render('recipes/recipe')
  },
  get_new: (req, res, next) => {
    res.render('recipes/new')
  },

  post_new: (req, res, next) => {
    const newRecipe = new Recipe({
      name       : req.body.name,
      avatar     : req.body.avatar,
      type       : req.body.type,
      ingredient : req.body.ingredient,
      description: req.body.description


    })
    newRecipe.save((err) => {
      if (err) {
        return err;
      } else {
        return res.redirect("/recipe");
      }
    });
  },

  get_list: (req, res, next) => {
    Recipe.find({}).then( recipes => {
      console.log(`recetas aquiiiii ${recipes} 8=====D`)
      res.render('recipes/list', {
        title:'List Of Recipes',
        recipes: recipes
      });
    })
    // Recipe.find({}, (err, recipes) => {
    //   if (err) { return next(err); }
    //
    //   res.render('recipes/list', {
    //     title:'List Of Recipes',
    //     recipes: recipes
    //   });
    // })
  },


  delete:(req, res, next)=>{
    Recipe.findByIdAndRemove(req.params.id, (err, obj) => {
      if (err) {
        return next(err);
      }
      res.redirect("/recipe");
    });
  },


  editGet: (req, res, next) => {
    Recipe.findById(req.params.id, (err, recipe) => {
      if (err) {
        console.log(err);
      }
      res.render('recipes/edit', {
        recipe: recipe
      });
    });
  },

  editPost: (req, res, next) => {
    const { name, type, description, ingredient, avatar } = req.body
    const updates = { name, type, description, ingredient, avatar }
    Recipe.findByIdAndUpdate(req.params.id, updates, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/recipes/recipe/${result._id}`);
    });
  },
}
