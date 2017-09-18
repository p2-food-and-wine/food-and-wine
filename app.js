const app = require('express')()

require('./config/passport-strategy-local')()
require('./config/express')(app)

const authRoutes = require("./routes/auth-routes")
const routes = require('./routes/routes')

app.use('/', authRoutes)
app.use('/', routes)

require('./config/error-handler')(app)
module.exports = app
