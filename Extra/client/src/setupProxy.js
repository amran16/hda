const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/auth/heroku', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/items/', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/items/', { target: 'http://localhost:3000' }));
    app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
}


