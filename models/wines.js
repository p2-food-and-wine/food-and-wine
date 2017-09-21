const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const recipeSchema = new Schema({
  name                   : String,
  origin                 : String,
  serving_suggestion     : String,
  tasting_note           : String,
  varietal               : String


}, {
  timestamps : {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Wines   = mongoose.model('Wines', winesSchema)
module.exports = Wines
