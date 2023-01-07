var express = require('express');
var path  = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');

//connect to db
mongoose.connect('mongodb://127.0.0.1:27017/carwash');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Cononeced to MongoDB');
});


//Init app
var app = express();

// engines
app.set('views' ,path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//public folder
app.use(express.static(path.join(__dirname,'public')));

//Set routes
var pages = require('./routes/pages.js');
app.use('/', pages);

//starting the server
var port = 3000;
app.listen(port, function() {
	console.log('Server started on port ' + port);
})