const mongoose   = require('mongoose')
const Schema     = mongoose.Schema
const dishOrder      = require('./DishOrder')
const IngredientP = require('./Ingredient')


const commentSchema = new Schema({

  comments: String,
  author  : {type: Schema.Types.ObjectId, ref:'User'},
  refRecipe  : {type: Schema.Types.ObjectId, ref:'Recipe'}


}, {

  timestamps : {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Comment   = mongoose.model('Comment', commentSchema)
module.exports = Comment
