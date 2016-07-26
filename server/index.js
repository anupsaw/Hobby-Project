'use strict';

module.exports = main;

//require module
var bodyParser = require('body-parser');
var router = require('./app/route/app.route.js')();
// export module
function main(app,db) {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(router);
    console.log('anup');
    return app;

}