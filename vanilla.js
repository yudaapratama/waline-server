const path = require('node:path');
const Application = require('thinkjs');
const dotenv = require('dotenv');

dotenv.config();
const instance = new Application({
  ROOT_PATH: __dirname + '/node_modules/@waline/vercel',
  APP_PATH: path.join(__dirname + '/node_modules/@waline/vercel', 'src'),
  proxy: false, // use proxy
  env: 'development',
});

instance.run();

let config = {};

try {
  config = require('./node_modules/@waline/vercel/src/config/config.js');
} catch (e) {
  // do nothing
}
for (const k in config) {
  think.config(k, config[k]);
}
