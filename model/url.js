const Sequelize = require('sequelize');
const sequelize = require('./db');

const Url = sequelize.define('url', {
  urlShort: {
    type: Sequelize.STRING
  },
  urlLong: {
    type: Sequelize.STRING
  }
})

Url.sync();

module.exports = Url;