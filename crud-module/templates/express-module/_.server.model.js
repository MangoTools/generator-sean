
'use strict';

/**
 * <%= humanizedSingularName %> Schema
 */
module.exports = function(sequelize, DataTypes) {
  var <%= classifiedSingularName %> = sequelize.define('<%= classifiedSingularName %>', {
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false
      },
      created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      associate: function(models){
        <%= classifiedSingularName %>.belongsTo(models.User);
      }
    });
  return <%= classifiedSingularName %>;
};
