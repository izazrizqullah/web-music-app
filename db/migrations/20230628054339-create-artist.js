"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Artists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      packagename: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      artistname: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      imageurl: {
        type: Sequelize.STRING(200),
      },
      releasedate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      sampleurl: {
        type: Sequelize.STRING(200),
      },
      price: {
        type: Sequelize.STRING(100),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Artists");
  },
};
