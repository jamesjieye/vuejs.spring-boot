require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var mongoose = require('mongoose')
var session = require('express-session')
var cookieParser = require('cookie-parser')
var MongoStore = require('connect-mongo')(session)
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// Setup MongoDB
if (process.env.DB_DEBUG === 'true' || config.dev.db.debug) {
  mongoose.set('debug', true);
}

// Bootstrap db connection
mongoose.connect(config.dev.db.uri, config.dev.db.options, function (err) {
  if (err) {
    console.error('MongoDBClient - Could not connect to MongoDB!', err);
  } else {
    console.log('MongoDBClient - Mongoose initialized.');
  }
});

mongoose.connection.on('error', function (err) {
  console.error('MongoDBClient - MongoDB connection error.', err);
  process.exit(-1);
})

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// Cookie parse should put before session
app.use(cookieParser(config.dev.session.secret, config.dev.session.cookie));

// Express MongoDB session storage
app.use(session({
  saveUninitialized: true,
  resave: false,
  secret: config.dev.session.secret,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    collection: config.dev.session.collection
  }),
  cookie: config.dev.session.cookie,
  name: config.dev.session.name
}));

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
