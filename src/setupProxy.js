const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/diets', {
            target: 'http://35.216.64.71',
            changeOrigin: true
        })
    )
}