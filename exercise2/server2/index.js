require('dotenv').config();
const express = require('express');
const Heroku = require('heroku-client');
const cors = require('cors');

const app = express();
app.use(cors());

//console.log(process.env.HEROKU_API_TOKEN);
const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN });


app.get('/', (req, res) => {
    res.send('hello there');
});

app.get('/apps', (req, res) => {
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


const PORT = process.env.PORT || 5000;
app.listen(PORT);