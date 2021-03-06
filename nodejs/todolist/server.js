var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//configuration

mongoose.connect('mongodb://node:

//Figure out how to connect to a mongodb database on local machine.

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json}));
app.use(methodOverride());

//listen (start app with node server.js)
app.listen(8080);
console.log("App listening to port 8080");
