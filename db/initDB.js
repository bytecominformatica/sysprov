var pathUtil = require('../app/util/pathUtil');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL);
const modelsDir = __dirname + "/../model/"

module.exports = function() {
    pathUtil.walk(modelsDir, function(err, models) {
      if (err) throw err;

      models.forEach(function(model){
          sequelize.import(model);
          console.log("[SEQUELIZE] CREATING ENTITY " + model);
      });

      sequelize.sync({/*force: true, */logging: null});

    });
}

module.exports.import = function(model) {
    return sequelize.import(modelsDir + model);
}


