var config = {};

config.host = 'http://localhost' || 'http://127.0.0.1';
config.port = process.env.PORT || 3000;
config.hostmongo = 'localhost';
config.portmongo = '27017';
config.db = 'WareHouseMng';

module.exports = config;