const config = require('@config/index');
const Database = require('@modules/Database/Database');

module.exports = new Database(config.modules.Database);
