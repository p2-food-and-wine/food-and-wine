const passport      = require("passport")
const LocalStrategy = require('passport-local').Strategy
const User          = require('../models/User')
const bcryptjs      = require("bcryptjs")
const dotenv        = require("dotenv").load()

module.exports = function() {
  passport.serializeUser((user, cb) => {
    cb(null, user.id)
  })

  passport.deserializeUser((id, cb) => {

    User.findById(id, (err, user) => {
      if (err) {
        return cb(err);
      }
      cb(null, user);
    });
  })

  passport.use('local-signup', new LocalStrategy({
      passReqToCallback: true
    },
    (req, username, password, next) => {
      process.nextTick(() => {
        User.findOne({
          'username': username
        }, (err, user) => {
          if (err) {
            return next(err);
          }

          if (user) {
            return next(null, false)
          } else {
            const {
              username,
              email,
              password
            } = req.body;
            const hashPass = bcryptjs.hashSync(password, bcryptjs.genSaltSync(8), null);
            const newUser = new User({
              username,
              email,
              password: hashPass
            });

            newUser.save((err) => {
              if (err) {
                next(err);
              }
              return next(null, newUser);
            });
          }
        });
      });
    }));

  passport.use('local-login', new LocalStrategy((username, password, next) => {
    User.findOne({
      username
    }, (err, user) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        return next(null, false, {
          message: "Incorrect username"
        })
      }
      if (!bcryptjs.compareSync(password, user.password)) {
        return next(null, false, {
          message: "Incorrect password"
        })
      }
      return next(null, user);
    });
  }));
}
