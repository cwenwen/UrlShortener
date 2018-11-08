const Sequelize = require('sequelize');

const sequelize = new Sequelize('urlDB', process.env.USER, process.env.PWD, {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => console.log('Connecting succeeded'))
  .catch(error => console.log(`Connecting error: ${error}`))

  module.exports = sequelize;