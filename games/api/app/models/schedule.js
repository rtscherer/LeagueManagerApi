// SCHERER DEVELOPMENT
// app/models/schedule.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ScheduleSchema = new Schema({
    teamId: String,
    gamesArray: Array
});

module.exports = mongoose.model('Schedule', ScheduleSchema);