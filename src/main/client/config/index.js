// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 3000,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    db: {
      uri: 'mongodb://localhost:27017/starter',
      options: {
        user: '',
        pass: ''
      },
      debug: false
    },
    session: {
      // The session cookie name
      name: 'starter',
      secret: 'd80632cb-9642-4196-a7b0-a25e681ae253',
      // The name of the MongoDB collection to store sessions in
      collection: 'sessions',
      // The session cookie settings
      cookie: {
        path: '/',
        httpOnly: true,
        // If secure is set to true then it will cause the cookie to be set
        // only when SSL-enabled (HTTPS) is used, and otherwise it won't
        // set a cookie. 'true' is recommended yet it requires the above
        // mentioned pre-requisite.
        secure: false,
        // Only set the maxAge to null if the cookie shouldn't be expired
        // at all. The cookie will expunge when the browser is closed.
        maxAge: null,
        // To set the cookie in a specific domain uncomment the following setting:
        domain: ''
      }
    }
  }
}
