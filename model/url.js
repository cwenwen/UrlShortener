const Sequelize = require('sequelize');
const sequelize = require('./db');

const Url = sequelize.define('url', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  urlChar: {
    type: Sequelize.STRING
  },
  urlOriginal: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
  tableName: 'cwenwen_urls',
})

Url.sync();

module.exports = Url;