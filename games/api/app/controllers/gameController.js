// SCHERER DEVELOPMENT
// app/controllers/gameController.js

var Game = require('../models/game');
var Exceptions = require('../../../../common/exceptions/exceptions');

var gameController = function() {
    var get = function(req, res) {
        Game.find(function(err, game) {
            if (err)
                res.send(err);

            res.json(game);
        });
    };
    
    var post = function(req, res) {
        
        var game = new Game();
        game.homeTeam         = req.body.homeTeam;
        game.awayTeam         = req.body.awayTeam;
        game.homeTeamScore    = req.body.homeTeamScore;
        game.awayTeamScore    = req.body.awayTeamScore;
        game.isScoreFinal     = req.body.isScoreFinal;
        game.gameDate         = req.body.gameDate;
        game.gameFormat       = req.body.gameFormat;
        game.facilityId       = req.body.facilityId;
        game.lastUpdate       = Date.now();
    
        game.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Game created!' });
        });
    };
    
    var getById = function(req, res) {
        Game.findById(req.params.game_id, function(err, game) {
            if (err)
                res.send(err);
            res.json(game);
        });
    };
    
    var put = function(req, res) {

        Game.findById(req.params.game_id, function(err, game) {

            if (err)
                //res.send(err);
                Exceptions.PutException("Game API", error);
                
            game.homeTeam         = req.body.homeTeam;
            game.awayTeam         = req.body.awayTeam;
            game.homeTeamScore    = req.body.homeTeamScore;
            game.awayTeamScore    = req.body.awayTeamScore;
            game.isScoreFinal     = req.body.isScoreFinal;
            game.gameDate         = req.body.gameDate;
            game.gameFormat       = req.body.gameFormat;
            game.facilityId       = req.body.facilityId;
            game.lastUpdate       = Date.now();
            
            game.save(function(err) {
                if (err)
                {
                    res.send(err);
                    res.json({ message: 'ERROR: ' + err })
                }

                res.json({ message: 'Game updated!' });
            });

        });
    };
    
    var deleteById = function(req, res) {
        Game.remove({
            _id: req.params.game_id
        }, function(err, game) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    };
    
    return { 
        get: get,
        post: post,
        getById: getById,
        put: put,
        deleteById: deleteById
    };
};
    
module.exports = gameController;