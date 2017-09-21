const mongoose   = require('mongoose')
const Schema     = mongoose.Schema
const dishOrder      = require('./DishOrder')
const IngredientP = require('./Ingredient')

const recipeSchema = new Schema({
  name               : String,
  avatar             : String,
  type               : { type: String, enum: dishOrder, required: true },
  principalIngredient: { type: String, enum: IngredientP, required: true },
  ingredient         : String,
  preparacion        : String,
  author             : {type: Schema.Types.ObjectId, ref:'User'}

}, {
  timestamps : {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Recipe   = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe
