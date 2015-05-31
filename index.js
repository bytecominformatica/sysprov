var express = require('express');
var bodyparser = require('body-parser')
var app = express();

var routes = require('./app/routes.js');
var db = require('./db/initDB');

app.use(express.static(__dirname + '/public'));
app.set('port', (process.env.PORT || 8080));
app.use(bodyparser.urlencoded({extended: false}))

// routes ======================================================================
routes(app);

// create table of database ====================================================
db();
//db.import('user');

app.listen(app.get('port'), function() {
  console.log('SysProv is running on port', app.get('port'));
});
