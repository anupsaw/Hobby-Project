/* global __dirname */
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
mongoose.connect('mongodb://127.0.0.1/test');

global.requireFile = function(name){
	return require(__dirname + '/server/' + name);
}


var app = express();


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	// // yay!
});

app.use(express.static(__dirname + '/client'));
app = requireFile('index.js')(app, db);

// app.get('/home', function (req, res) {

//         console.log('I am here');
//         res.send('anup');

//     })

app.listen('3000', function (req, res) {


	console.log("Server is listening on port 3000")

})