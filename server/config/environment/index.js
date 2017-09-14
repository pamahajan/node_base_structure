'use strict'

const path = require('path'),
  _ = require('lodash');

const all = {
  /**
  * Current environment variable
  */
  env: process.env.NODE_ENV,

  /**
  * Application Root Folder
  */
  root: path.normalize(__dirname + './../../../'),

  /**
  * Application Port
  * Default - 3000
  */
  port: process.env.PORT || 3000,

  /**
  * Application IP
  * Default - 127.0.0.1
  */
  ip: process.env.IP || '127.0.0.1',

  /**
  * Utilities
  */
  util: {
    logger: path.join(__dirname, '../../components/logger')
  },

  /**
   * Modules Path
   */
  module: {
    root: path.join(__dirname, './../../modules'),
    user: path.join(__dirname, './../../modules/user')
  },

  /**
   * Connections Path
   */

  connection: {
    mssql: path.join(__dirname, './../connections/mssql.connection')
  },
  /**
  * Logs Configuration
  */

  log:{
    path: path.join(__dirname, './../../logs', process.env.NODE_ENV, 'project-name.' + process.env.NODE_ENV + '.log')
  }
}

module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});
