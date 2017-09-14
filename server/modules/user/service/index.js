/**
 * User service
 */
'use strict'

const config = require('./../../../config/environment'),
  mssql = require(config.connection.mssql),
  sql = require('mssql');

exports.mssql = (() => {

  let query = async (params) => {
    let request = new sql.Request(mssql.pool);
    console.log(params);
    return await request.query(params.query);
  }

  return {
    query: query,
  }
})();
