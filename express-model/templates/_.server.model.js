'use strict';

/**
 * <%= classifiedModelName %> Schema
 */
module.exports = function(sequelize, DataTypes) {
  var <%= classifiedModelName %> = sequelize.define('<%= classifiedModelName %>', {

    },
    {
      associate: function(models){
        // Association goes here
      }
    });
  return <%= classifiedModelName %>;
};
