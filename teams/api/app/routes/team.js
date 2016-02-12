// SCHERER DEVELOPMENT
// app/routes/team.js

var express             = require('express');
var router              = express.Router();
var Team                = require('../models/team');
var teamController      = require('../controllers/teamController')();

router.route('/teams')
    // GET api/teams
    .get(teamController.get)
    
    // POST api/teams
    .post(teamController.post);

router.route('/teams/:team_id')
    // GET api/teams/:team_id
    .get(teamController.getById)
    
    // PUT api/teams/:team_id
    .put(teamController.put)
    
    // DELETE api/teams/:team_id
    .delete(teamController.deleteById);

module.exports = router;