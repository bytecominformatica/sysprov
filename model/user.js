module.exports = function(sequelize, DataTypes) {
  return sequelize.define("user", {
    login: {type: DataTypes.STRING, field: 'first_name', validate: {notNull: true, notEmpty: true}},
    password: {type: DataTypes.STRING, validate: {notNull: true, notEmpty: true} },
    status: {type: DataTypes.ENUM, values: ['ACTIVE', 'INACTIVE']}
  }, {
     underscored: true
   })
}