// SCHERER DEVELOPMENT
// app/controllers/teamController.js

var Team = require('../models/team');

var teamController = function() {
    var get = function(req, res) {
        Team.find(function(err, team) {
            if (err)
                res.send(err);

            res.json(team);   
        });
    };
    
    var post = function(req, res) {
        
        var team = new Team();
        team.name           = req.body.name;
        team.league         = req.body.league;
        team.lastUpdate     = Date.now();
    
        team.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Team created!' });
        });
    };
    
    var getById = function(req, res) {
        Team.findById(req.params.team_id, function(err, team) {
            if (err)
                res.send(err);
            res.json(team);
        });
    };
    
    var put = function(req, res) {

        Team.findById(req.params.team_id, function(err, team) {

            if (err)
                res.send(err);

            team.name           = req.body.name;
            team.league         = req.body.league;
            team.lastUpdate     = req.body.lastUpdate;
            
            if (team.name != null)
                var teamName = ' (' + team.name + ' ' + team.league + ')';
            
            team.save(function(err) {
                if (err)
                {
                    res.send(err);
                    res.json({ message: 'ERROR: ' + err })
                }

                res.json({ message: 'Team updated!' +  teamName });
            });

        });
    };
    
    var deleteById = function(req, res) {
        Team.remove({
            _id: req.params.team_id
        }, function(err, team) {
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
    
module.exports = teamController;