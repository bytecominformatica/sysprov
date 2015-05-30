var path = require('path')
var express = require('express');
var bodyparser = require('body-parser')
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', (process.env.PORT || 8080));
app.use(bodyparser.urlencoded({extended: false}))

// routes ======================================================================
require('./app/routes.js')(app);

require('./db/initDB')()

app.listen(app.get('port'), function() {
  console.log('SysProv is running on port', app.get('port'));
});
