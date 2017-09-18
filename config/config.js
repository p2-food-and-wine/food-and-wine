const path = require('path')
const rootPath = path.normalize(__dirname+'/../')

module.exports = {
  db: process.env.DB_URL,
  sessionSecret: process.env.SESSION_SECRET,
  rootPath: rootPath
}
