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
    connect: true
  }
};
