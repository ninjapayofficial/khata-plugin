// plugins/khata-plugin/migrations/20211010-create-company.js

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('KhataCompanies', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        userId: { type: Sequelize.STRING, allowNull: false },
        name: { type: Sequelize.STRING, allowNull: false },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('KhataCompanies');
    },
  };
  