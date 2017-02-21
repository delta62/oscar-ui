const fallback = require('connect-history-api-fallback');

module.exports = {
  open: false,
  logLevel: "warn",
  logFileChanges: false,
  middleware: [
    fallback({
      index: './index.html',
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
    })
  ],
  serveStatic: [{
    route: '/images',
    dir:   'node_modules/oscar-resources/images'
  }]
};
