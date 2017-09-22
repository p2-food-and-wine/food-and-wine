module.exports = {
  index: (req, res, next) => {
    res.render('wines', {beverage : "Wines"})
  }
}
