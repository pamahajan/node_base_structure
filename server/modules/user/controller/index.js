/**
 * User controller
 */
'use strict'

let service = require('./../service'),
  constants = require('./../user.constants'),
  config = require('./../../../config/environment'),
  l = require(config.util.logger).root.child({'module': __filename.substring(__dirname.length + 1, __filename.length - 3)});

exports.insert = async function(newUser){
  try{

    //TODO - SQL INJECTOR
  } catch(err){
    l.error('File: User Controller, INSERT,  Error --> ', err);
    throw(err);
  }
}

exports.get = async function(){
  try{

  return await service.mssql.query('Select * from [WinRX].[dbo].[apm] LIMIT 1;');
  } catch(err){
    l.error('File: User Controller, GET, Error --> ', err);
    throw(err);
  }
}
