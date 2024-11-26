// plugins/khata-plugin/migrations/20211010-create-transaction.js

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('KhataTransactions', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        partyId: { type: Sequelize.INTEGER, allowNull: false },
        amount: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
        description: { type: Sequelize.STRING },
        entryDate: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
        billImageUrl: { type: Sequelize.STRING },
        balanceAfter: { type: Sequelize.DECIMAL(10, 2) },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('KhataTransactions');
    },
  };
  