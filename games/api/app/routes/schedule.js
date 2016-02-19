// SCHERER DEVELOPMENT
// app/routes/schedule.js

var express             = require('express');
var router              = express.Router();
var Schedule            = require('../models/schedule');
var scheduleController  = require('../controllers/scheduleController')();

router.route('/schedule')
    // GET api/games/schedule
    .get(scheduleController.get)
    
    // POST api/games/schedule
    .post(scheduleController.post);

router.route('/schedule/:schedule_id')
    // GET api/games/schedule/:schedule_id
    .get(scheduleController.getById)
    
    // PUT api/games/schedule/:schedule_id
    .put(scheduleController.put)
    
    // DELETE api/games/schedule/:schedule_id
    .delete(scheduleController.deleteById);

module.exports = router;