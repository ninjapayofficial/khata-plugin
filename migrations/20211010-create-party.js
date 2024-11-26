// plugins/khata-plugin/migrations/20211010-create-party.js

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('KhataParties', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        companyId: { type: Sequelize.INTEGER, allowNull: false },
        type: { type: Sequelize.ENUM('customer', 'supplier'), allowNull: false },
        name: { type: Sequelize.STRING, allowNull: false },
        phoneNumber: { type: Sequelize.STRING },
        gstin: { type: Sequelize.STRING },
        billingAddress: { type: Sequelize.TEXT },
        shippingAddress: { type: Sequelize.TEXT },
        reminderDate: { type: Sequelize.DATE },
        currentBalance: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0 },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('KhataParties');
    },
  };
  