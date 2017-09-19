const router           = require('express').Router()
const IndexController  = require('../controllers/IndexController')
const RecipeController = require('../controllers/RecipeController')

router.get('/', IndexController.index)

router.get('/recipe', RecipeController.index)

router.get('/recipes/new', RecipeController.get_new)
router.post('/recipes/new', RecipeController.post_new)

router.get('/recipes/list', RecipeController.get_list)

router.get('/recipes/:id/delete', RecipeController.delete)

router.get('/recipes/:id/edit', RecipeController.editGet)
router.post('/recipes/:id/edit',RecipeController.editPost)

module.exports = router
