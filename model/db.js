const Sequelize = require('sequelize');

const sequelize = new Sequelize('urlDB', process.env.USER, process.env.PWD, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  }
});

sequelize
  .authenticate()
  .then(() => console.log('Connecting succeeded'))
  .catch(error => console.log(`Connecting error: ${error}`))

  module.exports = sequelize;