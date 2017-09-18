const router = require('express').Router()
const IndexController = require('../controllers/IndexController')
const RecipeController = require('../controllers/RecipeController')

router.get('/', IndexController.index)
router.get('/recipe', RecipeController.index)
router.post('/recipe/new', RecipeController.post_new)

module.exports = router
