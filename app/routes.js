var Sequelize = require('sequelize');
//var pg = require('pg');
var sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = function(app) {
	app.post('/login', function(req, res){
	  var body = req.body;
      console.log(body)

      var User = sequelize.import(__dirname + "/../model/user");

      User.findOne({where: {username: body.username, password: body.password}}).then(function (user) {
        if(user)
            res.send(user);
        else
            res.send('username or password invalid')
      });
    });
};