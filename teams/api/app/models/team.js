// SCHERER DEVELOPMENT
// app/models/team.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TeamSchema   = new Schema({
    name: String,
    league: String,
    lastUpdate: Date
});

module.exports = mongoose.model('Team', TeamSchema);