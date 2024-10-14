const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'hoseokhan',
  location: 'asia-east1'
};
exports.connectorConfig = connectorConfig;

