const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const recipeSchema = new Schema({
  name       : String,
  type       : String,
  description: String,
  ingredient : String,
  avatar     : String
}, {
  timestamps : {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Recipe   = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe
