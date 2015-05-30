var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL);

var models = ['user'];

module.exports = function() {
    models.forEach(function(model){
        sequelize.import(__dirname + "/../model/" + model);
        sequelize.sync({/*force: true, */logging: null});
        console.log("[SEQUELIZE] CREATING ENTITY " + model);
    });
}
