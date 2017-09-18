module.exports = {
  index: (req, res, next) => {
    res.render('recipe')
  },
  post_new: (req, res, next) => {
    const newRecipe= new Recipe({
      name       : req.body.name,
      type       : req.body.type,
      description: req.body.description,
      ingredient : req.body.ingredient,
      avatar     : req.body.avatar
    })
    newRecipe.save((err) => {
      if (err) {
        return err;
      } else {
        return res.redirect("/recipe");
      }
    });
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
      res.render('recipes/update', {
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
      res.redirect(`/recipe/${result._id}`);
    });
  },
}
