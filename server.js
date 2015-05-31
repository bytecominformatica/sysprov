var express = require('express');
var bodyparser = require('body-parser')
var app = express();

var routes = require('./app/routes.js');
var db = require('./db/initDB');

app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended: false}))

// routes ======================================================================
routes(app);

// create table of database ====================================================
db();

var User =  db.import('user').create({username: 'clairton', password: 'clairton'});

app.listen(process.env.PORT, function() {
  console.log('SysProv is running on port', app.get('port'));
});
