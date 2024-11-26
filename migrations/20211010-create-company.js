// plugins/khata-plugin/migrations/20211010-create-company.js

'use strict';
// const { DataTypes } = require('sequelize');

module.exports = {
  up: async ({ context: sequelize }) => {
    const queryInterface = sequelize.getQueryInterface();
    const { DataTypes } = require('sequelize');
    await queryInterface.createTable('KhataCompanies', {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      userId: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('KhataCompanies');
  },
};
