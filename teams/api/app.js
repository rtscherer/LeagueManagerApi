// SCHERER DEVELOPMENT
// PLAYER API
// server.js

// call the packages we need
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var port            = 8081;

// routers
var teamRouter    = require('./app/routes/team');

// connect to players database
mongoose.connect('mongodb://localhost:27017/leaguemanager');

// configure bodyParser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || port;

// middleware to use for all requests
teamRouter.use(function(req, res, next) {
    console.log('A request was made to the league manager teams api');
    next();
});

// api base route
teamRouter.get('/', function(req, res) {
    res.json({message: 'Welcome to the League Manager Teams API'});
});

// prefix all routes with api
app.use('/api', teamRouter);

// start the server
app.listen(port);
console.log('Team API Running on Port ' + port);