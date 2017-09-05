/**
 * Connections Files Handler
 */

const config = require('./../environment');

module.exports = () => {
  /**
   * Define All Possible Connections
   */
  const connections = ['mongoDB'];

  for(let i = 0; i<connections.length; i++){
    if(config[connections[i]].connect)
      require('./' + connections[i] + '.connection')();
  }
}
