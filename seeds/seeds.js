const mongoose = require("mongoose")
const dbURL = require('../config/config').db
const Equivalence = require('../models/Equivalence')

mongoose.connect(dbURL)
  .then( () => {
    console.log(`Connected to db! ${dbURL}`)
  })

const equivalences = [
  {
    ingredient: 'Carne Roja',
    wineType: 'Vino rosado',
    wineTypeOriginal: 'rose+wine'
  },

  {
    ingredient: 'Carne Roja',
    wineType: 'Vino tinto',
    wineTypeOriginal: 'red+wine'
  },

  {
    ingredient: 'Carne Blanca',
    wineType: 'Vino blanco',
    wineTypeOriginal: 'white+wine'
  },

  {
    ingredient: 'Carne Blanca',
    wineType: 'Vino rosado',
    wineTypeOriginal: 'rose+wine'
  },

  {
    ingredient: 'Marisco',
    wineType: 'Vino blanco',
    wineTypeOriginal: 'white+wine'
  },

  {
    ingredient: 'Marisco',
    wineType: 'Vino rosado',
    wineTypeOriginal: 'rose+wine'
  },

  {
    ingredient: 'Marisco',
    wineType: 'Champán',
    wineTypeOriginal: 'champagne'
  },

  {
    ingredient: 'Pescado',
    wineType: 'Vino blanco',
    wineTypeOriginal: 'white+wine'
  },

  {
    ingredient: 'Pescado',
    wineType: 'Vino rosado',
    wineTypeOriginal: 'rose+wine'
  },

  {
    ingredient: 'Pescado',
    wineType: 'Champán',
    wineTypeOriginal: 'champagne'
  },

  {
    ingredient: 'Arroz',
    wineType: 'Vino tinto',
    wineTypeOriginal: 'red+wine'
  },

  {
    ingredient: 'Arroz',
    wineType: 'Vino blanco',
    wineTypeOriginal: 'white+wine'
  },

  {
    ingredient: 'Verdura',
    wineType: 'Vino blanco',
    wineTypeOriginal: 'white+wine'
  },

  {
    ingredient: 'Verdura',
    wineType: 'Vino rosado',
    wineTypeOriginal: 'rose+wine'
  },

]
