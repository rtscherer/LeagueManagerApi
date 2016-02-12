// SCHERER DEVELOPMENT
// app/controllers/playerController.js

var Player = require('../models/player');

var playerController = function() {
    var get = function(req, res) {
        Player.find(function(err, player) {
            if (err)
                res.send(err);

            res.json(player);
        });
    };
    
    var post = function(req, res) {
        
        var player = new Player();
        player.teamId               = req.body.teamId;
        player.firstName            = req.body.firstName;
        player.lastName             = req.body.lastName;
        player.phoneNumber          = req.body.phoneNumber;
        player.emailAddress         = req.body.emailAddress;
        player.primaryPosition      = req.body.primaryPosition;
        player.secondaryPosition    = req.body.secondaryPosition; 
        player.battingPosition      = req.body.battingPosition;
        player.hasSignedRoster      = req.body.hasSignedRoster;
        player.hasPaidLeagueFee     = req.body.hasPaidLeagueFee; 
        player.lastUpdate           = Date.now();
    
        player.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Player created!' });
        });
    };
    
    var getById = function(req, res) {
        Player.findById(req.params.player_id, function(err, player) {
            if (err)
                res.send(err);
            res.json(player);
        });
    };
    
    var put = function(req, res) {

        Player.findById(req.params.player_id, function(err, player) {

            if (err)
                res.send(err);

            player.teamId               = req.body.teamId;
            player.firstName            = req.body.firstName;
            player.lastName             = req.body.lastName;
            player.phoneNumber          = req.body.phoneNumber;
            player.emailAddress         = req.body.emailAddress;
            player.primaryPosition      = req.body.primaryPosition;
            player.secondaryPosition    = req.body.secondaryPosition; 
            player.battingPosition      = req.body.battingPosition;
            player.hasSignedRoster      = req.body.hasSignedRoster;
            player.hasPaidLeagueFee     = req.body.hasPaidLeagueFee;
            player.lastUpdate           = Date.now();
            
            if (player.firstName != null & player.lastName != null)
                var playerName = ' (' + player.firstName + ' ' + player.lastName + ')';
            
            player.save(function(err) {
                if (err)
                {
                    res.send(err);
                    res.json({ message: 'ERROR: ' + err })
                }

                res.json({ message: 'Player updated!' +  playerName });
            });

        });
    };
    
    var deleteById = function(req, res) {
        Player.remove({
            _id: req.params.player_id
        }, function(err, player) {
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
    
module.exports = playerController;