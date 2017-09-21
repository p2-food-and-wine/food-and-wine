const router           = require('express').Router()
const IndexController  = require('../controllers/IndexController')
const RecipeController = require('../controllers/RecipeController')
const multer           = require('multer')
const image            = multer({ dest: './public/images/' })


router.get('/', IndexController.index)

router.get('/recipes', RecipeController.listRecipes)
// router.post('/recipes', IndexController.searchRecipes)

router.get('/recipes/new', RecipeController.newRecipe)
router.post('/recipes/create', image.single('avatar'), RecipeController.createRecipe)

router.get('/recipes/:id', RecipeController.showRecipe)

router.get('/recipes/:id/edit', RecipeController.getEdit)
router.post('/recipes/:id/edit', RecipeController.updateRecipe)

router.get('/recipes/:id/delete', RecipeController.delete)

module.exports = router
