module.exports = {
  index: (req, res, next) => {
    res.render('recipe')
  },
  post_new: (req, res, next) => {
    res.render(index)
  }



}
