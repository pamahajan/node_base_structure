/*
 * Application Runner
 */

'use strict'

/*
 * Initiate Logger
 */
let config = require('./config/environment'),
  logger = require(config.util.logger);

logger.init(config);

const l = logger.root.child({'module': __filename.substring(__dirname.length + 1, __filename.length - 3)});
/**
  * Uncaught Execption Handler
  */

process.on('uncaughtException', ( err ) => {
  l.error(err, 'Uncaught Exception');
});

/**
  * Uncaught Rejection Handler
  */

process.on('uncaughtRejection', ( err ) => {
  l.error(err, 'Unknown Rejection');
});

/**
 * Connect To All Required Connections
 */
require('./config/connections')();

/**
 * koa Configuration
 */

const koa = require('koa'),
  app = new koa(),
  co = require('co');

/**
 * Register Application Middlewares
 */
require('./middlewares')(app);

/**
 * Register Application Routes
 */
require('./routes')(app);

/**
 * Initiate Application
 */
app.init = co.wrap(async () => {

  l.info('Initiating server on IP: %s on port: %d in %s mode', config.ip, config.port, config.env);
	app.server = app.listen(config.port, config.ip);
})

app.init()
