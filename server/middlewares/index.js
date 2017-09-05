'use strict'

const config = require('./../config/environment'),
  l = require(config.util.logger).root.child({'module': __filename.substring(__dirname.length + 1, __filename.length - 3)});

module.exports = function(app){

  l.info('Registering Application middleware');
  /**
   * Common Error Handler
   */
  app.use(async function(ctx, next){
    try{
      await next();
    } catch(err){

      ctx.status = err.status || 500;
  		ctx.body = {
  			success: false,
  			error: err.message
  		}
  		ctx.app.emit('error', new Error(err), this);
    }
  });
}
