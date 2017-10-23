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
    connect: false
  }, mssql: {
    // user: 'Administrator',
    // password: '..bV6q3%5v6',
    user: "sab",
    password: "dev@1",
    server: '35.158.25.199\\WIN-7GC68C9O3UF',
    database: 'WINRX',
    options: {
      encrypt: true,
    },
    connect: true
  }, 
};

// mssql: {
//   user: 'developer',
//   password: 'dev',
//   server: '10.10.70.71',
//   database: 'WinRX',
//   options: {
//     encrypt: true,
//   },
//   connect: true
// }

