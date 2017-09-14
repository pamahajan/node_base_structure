/**
 * Connections Files Handler
 */

const config = require('./../environment'),
  l = require(config.util.logger).root.child({'module': __filename.substring(__dirname.length + 1, __filename.length - 3)});


module.exports = () => {
  /**
   * Define All Possible Connections
   */
  const connections = ['mongoDB', 'mssql'];

  for(let i = 0; i<connections.length; i++){
    if(config[connections[i]].connect){
      l.info('Loading Connection ', connections[i]);
      require('./' + connections[i] + '.connection').connect();
    }
  }
}
