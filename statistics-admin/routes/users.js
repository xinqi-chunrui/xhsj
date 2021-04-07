var express = require('express');
var router = express.Router();
const { login } = require('../services/flow_list')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', function(req, res, next) {
  login('username', 'password').then(user => {
    console.log(user)
  })
});

module.exports = router;
