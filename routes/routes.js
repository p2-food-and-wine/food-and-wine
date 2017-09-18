const router           = require('express').Router()
const IndexController  = require('../controllers/IndexController')
const RecipeController = require('../controllers/RecipeController')

router.get('/', IndexController.index)
router.get('/recipe', RecipeController.index)
router.post('/recipe/new', RecipeController.post_new)
router.get('/:id/delete', RecipeController.delete)
router.get('/:id/update', RecipeController.editGet)
router.post('/:id/update',RecipeController.editPost)

module.exports = router
