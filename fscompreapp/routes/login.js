var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* post */
router.post('/', function(req, res) {
  if(req.body.user == 'admin' && req.body.pass == '123') {
    res.send('Logged in');
  }
  else {
    res.send('Invalid Credentials');
  }
});

module.exports = router;
