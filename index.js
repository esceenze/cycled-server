require('babel-register');

var app = require('./app').default;
var config = require('./config').default;

app.listen(config.port);
