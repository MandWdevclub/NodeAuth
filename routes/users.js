var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/login')

  // The get request for /login sends the login page to the user
  .get(function(req, res) {
    res.render('login', { title: 'Login' });
  })

  // The post request for /login authenticates users
  .post(function(req, res) {
    res.send('Login request');
  });


router.route('/register')

    // The get request for /register sends the registration page to the user
    .get(function(req, res) {
      res.render('register', { title: 'register' });
    })

    // The post request for /register saves a user
    .post(function(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        res.send('Register request for ' + username + " " + password);
    });

module.exports = router;
