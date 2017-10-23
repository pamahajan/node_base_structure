/**
 * MSSQL Connection
 */
'use strict'
const sql = require('mssql'),
  config = require('./../environment'),
  co = require('co'),
  l = require(config.util.logger).root.child({'module': __filename.substring(__dirname.length + 1, __filename.length - 3)});

let exp = module.exports = {};

exp.connect = () => {
  try{

    let sqlConfig = {
      user: config.mssql.user,
      password: config.mssql.password,
      server: config.mssql.server,
      database: config.mssql.database,
    };
    
    console.log(sqlConfig);
    sql.on('error', err => {
      l.error('File: SQL Connection, SQL connection Error, Err --> ', err);
      throw(err);
    });

    sql.on('connect', err => {
      if(err)
        l.error('Connection Error', err);
      l.info('Connection Established with sql')
    });

    sql.on('error', err => {
      if(err)
        l.error('Connection Error', err);
      l.info('Connection Established with sql')
    });
  
    let pool = new sql.ConnectionPool(sqlConfig);
    pool.connect().then(()=> {
      console.log('here')
    }).catch((err) => {
      console.log(err);
    });
    exp.pool = pool;

    l.info('Connection Established');
  } catch(err){

    l.error('File: MSSQL Connection, MSSQL Exports Function, Error --> ', err);
    throw(err);
  }
}
