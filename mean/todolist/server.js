//server.js

	//set up ====================
	var express = require('express');
	var app = express();								// create our app w/ express
	var mongoose = require('mongoose');					// mongoose for mongodb
	var morgan = require('morgan');						// log requests to the console (express 4)
	var bodyParser = require('body-parser');			// pull information from HTML POST (express 4)
	var methodOverride = require('method-override');	// simulate DELETE and PUT (express4)

	//configuration ===============

	mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uw03mypu');

	app.use(express.static(__dirname + '/public'));
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended':'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
	app.use(methodOverride());

	// listen (start app with node server.js) ==================
	app.listen(8080);
	console.log("App listening on port 8080");

	// define model ==============
	var Todo = mongoose.model('Todo', {
		text : String
	});

	// routes =====================================

		// api ====================================
		// get all todos
		app.get('/api/todos', function(req, res){

			// use mongoose to get all todos in the database
			 Todo.find(function(err, todos){

			 	// if there is an error retrieving, send the error. 
			 	if(err)
			 		res.send(err)

			 	res.json(todos); // return all todos in JSON format
			 });
		});

		// create 