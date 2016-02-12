// SCHERER DEVELOPMENT
// app/models/player.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlayerSchema   = new Schema({
    teamId: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    emailAddress: String,
    primaryPosition: String,
    secondaryPosition: String,
    battingPosition: String,
    hasSignedRoster: Boolean,
    hasPaidLeagueFee: Boolean,
    lastUpdate: Date
});

module.exports = mongoose.model('Player', PlayerSchema);