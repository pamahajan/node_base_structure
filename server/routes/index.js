/**
 * Application Routes
 */

'use strict'

const config = require('./../config/environment'),
  l = require(config.util.logger).root.child({'module': __filename.substring(__dirname.length + 1, __filename.length - 3)}),
  fs = require('fs'),
  Router = require('koa-router');

module.exports = (app) => {

  l.info('Registering Application Routes');

  let appRouter = Router(app);

  fs.readdirSync(config.module.root).forEach((module) => {
    let curModule = require(config.module[module]);
    if(curModule.routes){
      appRouter.use('/v1/' + module, curModule.routes());
    }
  });

  app.use(appRouter.routes());
}
