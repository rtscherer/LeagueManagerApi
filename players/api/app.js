// SCHERER DEVELOPMENT
// PLAYERS API
// app.js

// call the packages we need
try
{
    var express         = require('express');
    var app             = express();
    var bodyParser      = require('body-parser');
    var mongoose        = require('mongoose');
    var port            = 8080;
    
    // configure bodyParser for POST
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    // set port
    var port = process.env.PORT || port;
}
catch (err)
{
    console.log("Unable to assign packages. ERROR:" + err);
}

//imports
try
{
    //import router
    var playerRouter = require('./app/routes/player');
    
    //import exceptions
    var exceptions = require('./app/exceptions/exceptions');
}
catch (err)
{
    console.log("Unable to find player router.");
    console.log("ERROR:" + err);
    return;
}

// connect to players database
try
{
    mongoose.connect('mongodb://localhost:27017/leaguemanager');
}
catch (err)
{
    exceptions.ThrowDatabaseConnectionException(err);
    return;
}

// middleware to use for all requests
playerRouter.use(function(req, res, next) {
    console.log('A request was made to the league manager players api');
    next();
});

// api base route
playerRouter.get('/', function(req, res) {
    res.json({message: 'Welcome to the League Manager Players API'});
});

// prefix all routes with api
app.use('/api', playerRouter);

// start the server
app.listen(port);
console.log('Players API Running on Port ' + port);
