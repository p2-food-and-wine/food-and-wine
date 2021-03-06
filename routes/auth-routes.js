const express        = require("express")
const authRoutes     = express.Router()
const passport       = require("passport")
const bcryptjs       = require("bcryptjs")
const bcryptSalt     = 10
const ensureLogin    = require("connect-ensure-login")
const AuthController = require("../controllers/AuthController")
const User           = require("../models/User")

authRoutes.get("/signup", AuthController.signup)
authRoutes.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/recipes',
  failureRedirect : '/signup'
}))

authRoutes.get('/login',ensureLogin.ensureLoggedOut('/'), AuthController.login)
authRoutes.post('/login', passport.authenticate('local-login', {
  successRedirect : '/recipes',
  failureRedirect : '/login'
}))

authRoutes.get("/logout", AuthController.logout)

module.exports = authRoutes
