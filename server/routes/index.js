/**
 * Application Routes
 */

'use strict'

const config = require('./../config/environment'),
  l = require(config.util.logger).root.child({'module': __filename.substring(__dirname.length + 1, __filename.length - 3)});

module.exports = (app) => {
  l.info('Registering Application Routes');
}
