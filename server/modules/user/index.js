/**
 * User Index File
 */

const userConfig = require('./user.config'),
  config = require('./../../config/environment'),
  controller = require('./controller'),
  service = require('./service'),
  constants = require('./user.constants'),
  api = require('./api'),
  model = require('./model'),
  l = require(config.util.logger).root.child({'module': __filename.substring(__dirname.length + 1, __filename.length - 3)});

let user = (() => {
  try{

    let obj = {};

    if(userConfig.registerAPI)
      obj.routes = api.register();

    if(userConfig.exportConstants)
      obj.constants = constants;

    if(userConfig.exportController)
      obj.controller = controller;

    if(userConfig.exportServices)
      obj.service = service;

    if(userConfig.exportModel)
      obj.model = model.register();

    return obj;
  } catch(err){
    l.error('File: User Index, Error --> ', err);
    throw(err);
  }
})();

module.exports = user;
