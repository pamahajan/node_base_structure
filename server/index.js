/*
 * Application Boot File
 */

'use strict'

let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('./app.js');
