var path = require('path')
var express = require('express');
var app = express();
var pg = require('pg');


app.use(express.static(path.join(__dirname, 'public')));
app.set('port', (process.env.PORT || 8080));
app.set('view', path.join(__dirname, 'templates'));
app.set('view engine', 'jade')

// routes ======================================================================
require('./app/routes.js')(app);

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
})

app.listen(app.get('port'), function() {
  console.log('SysProv is running on port', app.get('port'));
});
