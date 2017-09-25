const request = require('superagent')
const mongoose = require("mongoose")
const dbURL = require('../config/config').db
const Equivalence = require('../models/Equivalence')
mongoose.connect('process.env.DB_URL', {
  useMongoClient: true
});
const API = "MDphMTIyMzQ1Ni05ZDJiLTExZTctOTQ1Ni0zMzc4ODZmMmJlNzQ6cDlGNHBOV1JmaVl0QUE3Rkc2dmFQYUpOTFZSdUR5Yml5S2ZB"

mongoose.connect(dbURL)
  .then(() => {
    console.log(`Connected to db! ${dbURL}`)
  })

const equivalences = [{
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

Equivalence.create(equivalences)
  .then(() => {
    console.log('All done!!')
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
