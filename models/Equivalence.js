const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ingredient = require('./Ingredient')

const equivalenceSchema = new Schema({
  ingredient : { type: String, enum: ingredient, required: true } ,
  wineType: { type: String, enum: [
    'Vino tinto',
    'Vino blanco',
    'Vino rosado',
    'Champán'
  ]},
  wineTypeOriginal: { type: String, enum: [
    'red+wine',
    'white+wine',
    'rose+wine',
    'champagne'
  ]}

}, {
  timestamps : {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Equivalence   = mongoose.model('Equivalence', equivalenceSchema)
module.exports = Equivalence
