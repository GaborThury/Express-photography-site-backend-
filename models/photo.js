'use strict';
module.exports = (sequelize, DataTypes) => {
  var Photo = sequelize.define('Photo', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};
