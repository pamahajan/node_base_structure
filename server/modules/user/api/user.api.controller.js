/**
 * User API Controller
 */
'use strict'

const controller = require('./../controller'),
  constants = require('./../user.constants'),
  config = require('./../../../config/environment'),
  l = require(config.util.logger).root.child({'module': __filename.substring(__dirname.length + 1, __filename.length - 3)});

exports.insert = async (ctx, next) => {
  try{

    let req = ctx.request.fields;
    if(!req)
      ctx.throw('Invalid Request');

    let newUser = await controller.insert(req);
    if(!newUser)
      ctx.throw('Internal Server Error', 500);

    ctx.body = {
      user: newUser
    };

    ctx.status = 200;
  } catch(err){
    l.error('File : User Api Controller, INSERT,  Error --> ', err);
    throw(err);
  }
}

exports.get = async (ctx, next) => {
  try{

    let user = await controller.get();
    console.log(user);
    ctx.body = {
      user: user
    };

    ctx.status = 200;
  } catch(err) {
    l.error('File : User Api Controller, GET, Error --> ', err);
    throw(err);
  }
}
