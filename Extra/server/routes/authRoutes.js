const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/', (req, res) => {
  res.send('hello there');
});

router.get('/auth/heroku', passport.authenticate('heroku'));

router.get('/auth/heroku/callback', passport.authenticate('heroku'));

router.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
});

router.get('/api/current_user', (req, res) => {
    console.log('req user', req.user);
    res.send(req.user);
})

module.exports = router;

