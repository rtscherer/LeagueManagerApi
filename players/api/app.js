// SCHERER DEVELOPMENT
// PLAYER API
// app.js

// call the packages we need
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var port            = 8080;

// routers
var playerRouter    = require('./app/routes/player');

// connect to players database
mongoose.connect('mongodb://localhost:27017/leaguemanager');

// configure bodyParser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || port;

// middleware to use for all requests
playerRouter.use(function(req, res, next) {
    console.log('A request was made to the league manager api');
    next();
});

// api base route
playerRouter.get('/', function(req, res) {
    res.json({message: 'Welcome to the League Manager API'});
});

// prefix all routes with api
app.use('/api', playerRouter);

// start the server
app.listen(port);
console.log('Player API Running on Port ' + port);