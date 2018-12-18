const express = require('express');
const router = express.Router();
const Heroku = require('heroku-client'); 


//console.log(process.env.HEROKU_API_TOKEN);
const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN });


router.get('/', (req, res) => {
    heroku.request({
        method: 'GET',
        path: '/apps',
        headers: {
            'Foo': 'Bar'
        },
        parseJSON: false
    }).then(response => {
        res.send(response);
    }).catch(e => {
        res.status(500).send('Errro');
        console.log(e);
    });

});

module.exports = router;