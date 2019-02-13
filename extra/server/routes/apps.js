const express = require('express');
const router = express.Router();
const Heroku = require('heroku-client'); 

const mongoose = require('mongoose');
const User = mongoose.model('user');

//console.log(process.env.HEROKU_API_TOKEN);
const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN });

//Show list
router.get('/', (req, res) => {
    heroku.get('/apps').then(apps => {
        res.send(apps);
    }).catch(e => {
        res.status(500).send('Errro');
        //console.log(e);
    });
});

//Add a new list
router.post('/name', (req, res) => {
    let name = req.body.name
    //console.log(name);
    heroku.post('/apps', { body: { name: name } }).then(app => {
        res.send(app);
    }).catch(e => {
        res.status(500).json(e.body);
        //console.log(e);
        // console.log('=================================');
        // console.log('error  >>>>>', e);
        // console.log('message >>> ', e.message);
        // console.log('body >>> ', e.body);
    });
});

// Delete list
router.delete('/:id', (req, res) => { 
    //console.log('item id:', req.params.id);
    heroku.delete('/apps/' + req.params.id).then(app => { 
      res.send(app);
  }).catch(e => {
      res.status(500).send('Errro');
      //console.log(e);
  });
 
});

module.exports = router;