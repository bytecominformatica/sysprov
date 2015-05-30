module.exports = function(sequelize, DataTypes) {
  return sequelize.define("user", {
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true}
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true}
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    underscored: true,
    indexes: [{unique: true, fields: ['login']}]
  })
}