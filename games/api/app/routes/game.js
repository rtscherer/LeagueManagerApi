// SCHERER DEVELOPMENT
// app/routes/game.js

var express             = require('express');
var router              = express.Router();
var Game                = require('../models/game');
var gameController      = require('../controllers/gameController')();

router.route('/games')
    // GET api/games
    .get(gameController.get)
    
    // POST api/games
    .post(gameController.post);

router.route('/games/:game_id')
    // GET api/games/:game_id
    .get(gameController.getById)
    
    // PUT api/games/:game_id
    .put(gameController.put)
    
    // DELETE api/games/:game_id
    .delete(gameController.deleteById);

module.exports = router;