var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true}
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {notEmpty: true},
      set: function(val) {
        this.setDataValue('password', crypto.createHash('sha256').update(val).digest('hex'));
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    underscored: true,
    indexes: [{unique: true, fields: ['username']}],
    instanceMethods: {
      validPassword: function(pass) {
        var passwordHash = crypto.createHash('sha256').update(pass).digest('hex');
        return passwordHash === this.password
      }
    }
  })
}