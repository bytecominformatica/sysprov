var express = require('express');
var session = require('express-session')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('cookie-session')
var passport = require('passport')
var flash = require('connect-flash');
var app = express();

/* CONFIGURE */
app.use(flash());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    cookie: { maxAge: 60000 },
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// routes ======================================================================
var routes = require('./app/routes/routes');
routes(app);

app.get('/flash', function(req, res){
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash('info', 'Flash is back!')
  res.redirect('/');
});

// create table of database ====================================================
var db = require('./db/initDB');
db();

app.use(express.static('public'));

app.listen(process.env.PORT, function() {
  console.log('SysProv is running on port', app.get('port'));
});
