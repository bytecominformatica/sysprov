var path = require('path')
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', (process.env.PORT || 8080));
app.set('view', path.join(__dirname, 'templates'));
app.set('view engine', 'jade')


// routes ======================================================================
require('./app/routes.js')(app);

app.listen(app.get('port'), function() {
  console.log('SysProv is running on port', app.get('port'));
});
