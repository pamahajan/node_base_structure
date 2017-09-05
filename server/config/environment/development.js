/**
 *  Development Specific Configuration
 */
'use strict'

const path = require('path');

module.exports = {
  log: {
    level: 'debug'
  }, mongoDB: {
    uri: 'mongodb://localhost/sample-project',
    options: {
      debug: true
    },
    connect: true
  }
};
