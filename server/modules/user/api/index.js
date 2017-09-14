/**
 * User api
 */
'use strict'

const apiController = require('./user.api.controller'),
  Router = require('koa-router');

exports.register = () => {

  let router = Router();

  router.get('/', apiController.get);
  return router.routes.bind(router);
}
