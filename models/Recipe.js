const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const recipeSchema = new Schema({
  name       : String,
  avatar     : String,
  type       : String,
  ingredient : String,
  preparacion: String


}, {
  timestamps : {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Recipe   = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe
