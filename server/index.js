require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose'); 
const cors = require('cors');

//const keys = require('./config/keys');

// const Heroku = require('heroku-client'); 
// const bodyParser = require('body-parser');
// const passport = require('passport');
// const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;


require('./models/User');
require('./services/passport');


//mongoose connections
mongoose.connect(process.env.MONGODB_URI);


const app = express();

app.use(cors());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIEKEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

//routes imports
const authentication = require('./routes/authRoutes');
const dataInfo = require('./routes/data');


//express routes
app.use(authentication);
app.use('/apps', dataInfo);










const PORT = process.env.PORT || 5000;
app.listen(PORT);
