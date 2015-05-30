var path = require('path')
var express = require('express');
var app = express();
var Sequelize = require('sequelize');
//var pg = require('pg');
var sequelize = new Sequelize(process.env.DATABASE_URL);


app.use(express.static(path.join(__dirname, 'public')));
app.set('port', (process.env.PORT || 8080));
app.set('view', path.join(__dirname, 'templates'));
app.set('view engine', 'jade')

// routes ======================================================================
require('./app/routes.js')(app);

//app.get('/db', function (request, response) {
//  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//    client.query('SELECT * FROM COMPANY', function(err, result) {
//      done();
//      if (err)
//       { console.error(err); response.send("Error " + err); }
//      else
//       { response.send(result.rows); }
//    });
//  });
//})

var User = sequelize.import(__dirname + "/model/user")
//Project.sync({force: true})


var user = User.sync({force : true}).then(function () {
    return User.create({
        login: 'clairton',
        password: 'clairton'
    });
});



app.get('/users', function (request, response) {
    User.findOne({ where: {login: 'clairton'} }).then(function(user) {
      response.send(user)
    });
});

console.log('inicio ')
app.listen(app.get('port'), function() {
  console.log('SysProv is running on port', app.get('port'));
});
