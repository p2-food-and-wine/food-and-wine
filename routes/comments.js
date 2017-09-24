const router           = require('express').Router()
const CommentController = require('../controllers/CommentController')


router.post('/recipes/show/:id/comment/create', CommentController.createComment);
router.post('/recipes/show/:id/comment/:commentid/delete', CommentController.deleteComment);

module.exports = router
