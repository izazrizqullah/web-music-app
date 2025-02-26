"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artist.init(
    {
      packagename: DataTypes.STRING(100),
      artistname: DataTypes.STRING(100),
      imageurl: DataTypes.STRING(200),
      releasedate: DataTypes.DATE,
      sampleurl: DataTypes.STRING(200),
      price: DataTypes.STRING(100),
    },
    {
      sequelize,
      modelName: "Artist",
    }
  );
  return Artist;
};
