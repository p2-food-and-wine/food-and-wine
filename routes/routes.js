const router = require('express').Router()
const IndexController = require('../controllers/IndexController')
const RecipeController = require('../controllers/RecipeController')

router.get('/', IndexController.index)

router.get('/recipes', RecipeController.index)

router.get('/recipes/new', RecipeController.new)
router.post('/recipes/create', RecipeController.create)

router.get('/recipes/:id', RecipeController.show)

router.get('/recipes/:id/edit', RecipeController.edit)
router.post('/recipes/:id', RecipeController.update)

router.get('/recipes/:id/delete', RecipeController.delete)

module.exports = router
