var express = require('express');
var app = express();
var consign = require('consign');

//configurações do express

app.use(express.static('./public'));

module.exports = app;