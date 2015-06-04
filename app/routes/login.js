var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
var User = require('../../db/initDB').import('user');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user){
        done(null, user);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }).then(function (user) {
            if (!user) {
                console.log('Incorrect username.');
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                console.log('Incorrect password.');
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        });
    })
);

module.exports = function(app) {
    User.create({username: 'teste', password: 'teste'})
    app.get('/logout',
        function (req, res) {
            req.logout();
            res.redirect('/login.html')
        }
    );

    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login.html'
        })
    );
}
