/**
 *  Production Specific Configuration
 */
'use strict'

const path = require('path');

module.exports = {
  log: {
    level: 'info'
  }, mongoDB: {
    uri: 'mongodb://localhost/sample-project',
    options: {
      debug: false
    },
    connect: false
  }, mssql: {
    user: 'developer',
    password: 'dev',
    server: '10.10.70.71'
    database: 'WinRX',
    options: {
      encrypt: true
    },
    connect: true
  }
};
