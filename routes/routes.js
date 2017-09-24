const router           = require('express').Router()
const multer           = require('multer')
const image            = multer({ dest: './public/images/' })
const IndexController  = require('../controllers/IndexController')
const RecipeController = require('../controllers/RecipeController')
const WineController = require('../controllers/WineController')
const EquivalenceController = require('../controllers/EquivalenceController')

router.get('/', IndexController.index)

router.get('/wines', WineController.index)
router.get('/recipes', RecipeController.listRecipes)

router.get('/recipes/new', RecipeController.newRecipe)
router.post('/recipes/create', image.single('avatar'), RecipeController.createRecipe)

router.get('/recipes/:id', RecipeController.showRecipe)
router.post('/show/:id', RecipeController.commentRecipe)

router.get('/recipes/:id/edit', RecipeController.getEdit)
router.post('/recipes/:id/edit', RecipeController.updateRecipe)

router.get('/recipes/:id/delete', RecipeController.delete)

router.get ('/equivalences',EquivalenceController.list)

module.exports = router
