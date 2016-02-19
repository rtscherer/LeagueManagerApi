// SCHERER DEVELOPMENT
// app/controllers/scheduleController.js

var Schedule = require('../models/schedule');
var exceptions      = require('../../../../common/exceptions/exceptions');

var scheduleController = function() {
    var get = function(req, res) {
        Schedule.find(function(err, schedule) {
            if (err)
                res.send(err);
                //exceptions.GetException('schedule_api', err);

            res.json(schedule);
        });
    };
    
    var post = function(req, res) {
        
        var schedule = new Schedule();
        schedule.teamId = req.body.teamId;
        schedule.gamesArray = req.body.gamesArray;
        
        schedule.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Schedule created!' });
        });
    };
    
    var getById = function(req, res) {
        Schedule.findById(req.params.schedule_id, function(err, schedule) {
            if (err)
                res.send(err);
            res.json(schedule);
        });
    };
    
    var put = function(req, res) {

        Schedule.findById(req.params.schedule_id, function(err, schedule) {

            if (err)
                res.send(err);

            schedule.teamId = req.body.teamId;
            schedule.gamesArray = req.body.gamesArray;
            
            schedule.save(function(err) {
                if (err)
                {
                    res.send(err);
                    res.json({ message: 'ERROR: ' + err })
                }

                res.json({ message: 'Schedule updated!' });
            });

        });
    };
    
    var deleteById = function(req, res) {
        Schedule.remove({
            _id: req.params.schedule_id
        }, function(err, schedule) {
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
    
module.exports = scheduleController;