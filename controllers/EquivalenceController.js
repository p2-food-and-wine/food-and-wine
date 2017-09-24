const Equivalence = require("../models/Equivalence")
const Recipe = require("../models/Recipe")

module.exports = {
  list: (req, res, next) => {
    Equivalence.find({
      ingredient: req.query.principalIngredient
    }).then(equivalences => {
      res.json(equivalences)
    })
  }
}
