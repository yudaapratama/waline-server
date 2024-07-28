const { Console } = require('../../packages/server/node_modules/think-logger3');
const Mysql = require('../../packages/server/node_modules/think-model-mysql');

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_PREFIX,
  MYSQL_CHARSET,
  MYSQL_SSL,
} = process.env;

let type = 'mysql';

exports.model = {
  type,
  common: {
    logSql: true,
    logger: (msg) => think.logger.info(msg),
  },

  mysql: {
    handle: Mysql,
    dateStrings: true,
    host: MYSQL_HOST || '127.0.0.1',
    port: MYSQL_PORT || '3306',
    database: MYSQL_DB,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    prefix: MYSQL_PREFIX || 'wl_',
    charset: MYSQL_CHARSET || 'utf8mb4',
    ssl:
      MYSQL_SSL === 'true'
        ? {
            rejectUnauthorized: false,
          }
        : null,
  },
};

/**
 * logger adapter config
 * @type {Object}
 */
exports.logger = {
  type: 'console',
  console: {
    handle: Console,
  },
};
