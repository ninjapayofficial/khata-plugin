// plugins/khata-plugin/src/index.js

module.exports = {
    init: async function (router, sequelize) {
      console.log('Initializing Khata Plugin');
  
      // Import models
      const models = require('../models')(sequelize);
  
      // Run migrations
      await sequelize.getQueryInterface().createTable('KhataCompanies', models.KhataCompany.rawAttributes);
      await sequelize.getQueryInterface().createTable('KhataParties', models.KhataParty.rawAttributes);
      await sequelize.getQueryInterface().createTable('KhataTransactions', models.KhataTransaction.rawAttributes);
  
      // Import routes
      const routes = require('./routes')(models);
  
      // Use routes
      router.use('/', routes);
    },
  };
  