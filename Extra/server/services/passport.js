const passport = require('passport');
const OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
const mongoose = require('mongoose'); 

const Heroku = require('heroku-client'); 


const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id); //this is the one generated by mongo automatically
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//heroku login
passport.use(
  'heroku',
  new OAuth2Strategy(
    {
      authorizationURL: 'https://id.heroku.com/oauth/authorize',
      tokenURL: 'https://id.heroku.com/oauth/token',
      clientID: process.env.HEROKU_OAUTH_ID,
      clientSecret: process.env.HEROKU_OAUTH_SECRET,
      callbackURL: 'http://localhost:5000/auth/heroku/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken: ', accessToken);
      console.log('refreshToken: ', refreshToken);
      console.log('profile ', profile);
      
      const heroku = new Heroku({ token: accessToken});
       
            heroku.request({
                method: 'GET',
                path: '/account',
                headers: {
                    'Foo': 'Bar'
                },
                parseJSON: false
            }).then(response => {
            console.log(response);
            console.log(JSON.parse(response).id)
            }).catch(e => {
                console.log(e);
            });

       

        // User.findOne({ herokuId: profile.id }).then(existingUser => {
        //     if (existingUser) {
        //         //we have previous record with profile Id
        //         done(null, existingUser);
        //     } else {
        //         new User({ herokuId: profile.id })
        //             .save()
        //             .then(user => done(null, user));
        //     }
        // });
      
    }
  )
);