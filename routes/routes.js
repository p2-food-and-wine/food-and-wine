const router = require('express').Router()
const IndexController = require('../controllers/IndexController')
const RecipeController = require('../controllers/RecipeController')
const WineController = require('../controllers/WineController')
router.get('/', IndexController.index)
router.get('/recipe', RecipeController.index)
router.get('/wines', WineController.index)


module.exports = router
