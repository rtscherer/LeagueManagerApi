// SCHERER DEVELOPMENT
// app/models/game.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GameSchema   = new Schema({
    homeTeam: String,
    awayTeam: String,
    homeTeamScore: Number,
    awayTeamScore: Number,
    isScoreFinal: Boolean,
    gameDate: Date,
    gameFormat: String,
    facilityId: String,
    lastUpdate: Date
});

module.exports = mongoose.model('Game', GameSchema);