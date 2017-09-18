const router = require('express').Router()
const IndexController = require('../controllers/IndexController')
const RecipeController = require('../controllers/RecipeController')

router.get('/', IndexController.index)
router.get('/recipe', RecipeController.index)

module.exports = router
