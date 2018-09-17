'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};
