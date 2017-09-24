const Recipe = require("../models/Recipe")

module.exports = {
  createComment: (req, res, next) => {
    console.log('ENTRA  CREATECOMMENT');
    const newComment = new Comment({
      comments: req.body.comments,
      author: req.user._id,
      refRecipe: req.params.id
    });
    console.log('CONSOLE LOGGGG ------> ' + newComment)
    newComment.save().then( co => res.redirect("/show") );
  },

  deleteComment: (req, res, next) => {
    console.log(req.params.commentid);
    Comment.findByIdAndRemove(req.params.commentid).then(() => {
      res.redirect("/show/${req.params.id}");
    });
  },

}
