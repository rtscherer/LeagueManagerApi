// SCHERER DEVELOPMENT
// app/routes/player.js

var express             = require('express');
var router              = express.Router();
var Player              = require('../models/player');
var playerController    = require('../controllers/playerController')();

router.route('/players')
    // GET api/players
    .get(playerController.get)
    
    // POST api/players
    .post(playerController.post);

router.route('/players/:player_id')
    // GET api/players/:player_id
    .get(playerController.getById)
    
    // PUT api/players/:player_id
    .put(playerController.put)
    
    // DELETE api/players/:player_id
    .delete(playerController.deleteById);

module.exports = router;