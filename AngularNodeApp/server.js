// Server.js

	// Set up 
	var express = require('express');
	var app = express();								// create our app w/ express
	var mongoose = require('mongoose');					// mongoose for mongodb
	var morgan = require('morgan'); 					// logs requests to console
	var bodyParser = require('body-parser'); 			// pull info from HTML POST
	var methodOverride = require('method-override'); 	// simulate DELETE and PUT 

	// connect to mongoose db on modulus.io
	mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');

	app.use(express.static(__dirname + '/public')); 				// tell node where static html pages are
	app.use(morgan('dev')); 										// log every request to the console
	app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
	app.use(bodyParser.json()); 									// parse application/json
	app.use(bodyParser.json({ type: 'application/vnd.api+json'})); 	// parse application/vnd.api+json
	app.use(methodOverride());

	// define model (Mongoose will make the )
	// MongoDB autoincrements with _id
	var Todo = mongoose.model('Todo', {
		text: String
	});



	// listen (and start app with node server.js)
	app.listen(8080);

	console.log("App listening on port 8080");
	console.log("dir name",__dirname);
	
	/***********************************************************************************/
	// RESTful api
	// GET rows from db
	app.get('/api/todos', function(req, res) {

		// Use mongoose to get all rows in the database
		Todo.find(function(err, rows) {

			// if there is an error retrieving, send the error
			if(err) 
				res.send(err);

			res.json(rows);
		});
	});

	// CREATE a row, info comes from AJAX request by Angular
	app.post('/api/todos', function(req, res) {
		Todo.create({
			text: req.body.text,
			done: false
		}, function(err, todo) {
			if(err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if(err) 
					res.send(err);

				res.json(todos);
			});
		});
	});

	// DELETE a row
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if(err)
				res.send(err);
		
			// get and return all the rows (objects) after we create another
			Todo.find(function(err, todos) {
				if(err)
					res.send(err);

				res.json(todos);
			});
		});
	});

	/***********************************************************************************/

	// Load Angular Application
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});