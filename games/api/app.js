// SCHERER DEVELOPMENT
// GAMES API
// app.js

// call the packages we need
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var port            = 8082;

// routers
var gameRouter      = require('./app/routes/game');
var scheduleRouter  = require('./app/routes/schedule');
var exceptions      = require('../../common/exceptions/exceptions');

// connect to players database
try { mongoose.connect('mongodb://localhost:27017/leaguemanager'); }
catch(err) { };

// configure bodyParser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || port;

// middleware to use for all requests
gameRouter.use(function(req, res, next) {
    console.log('A request was made to the league manager games api');
    next();
});

scheduleRouter.use(function(req, res, next) {
    console.log('A request was made to the league manager schedule api');
    next();
});

// api base route
gameRouter.get('/', function(req, res) {
    res.json({message: 'Welcome to the League Manager Games API'});
});

// prefix all routes with api
app.use('/api', gameRouter);
app.use('/api', scheduleRouter);

// start the server
app.listen(port);
console.log('Game API Running on Port ' + port);