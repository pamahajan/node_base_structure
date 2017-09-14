'use strict'

const mongoose = require('mongoose'),
  bluebird = require('bluebird'),
  config = require('./../environment'),
  l = require(config.util.logger).root.child({'module': __filename.substring(__dirname.length + 1, __filename.length - 3)});

/**
 * Override MongoDB depricated Promise
 */
mongoose.Promise = bluebird;

module.exports.connect = () => {

  l.info('Connecting to MongoDB');
  /**
  * Connect to MongoDB
  */
  mongoose.connect(config.mongoDB.uri, config.mongoDB.options || {});

  /**
  * UnExpected Connection Close Error
  */
  mongoose.connection.on('error', err => {
    l.error('MongoDB connection error: ', err);
    process.exit(-1);
  })

  l.info('MongoDB Connected');
}
