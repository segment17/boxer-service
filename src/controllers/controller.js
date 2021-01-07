
let mediator = require('../services/mediator.js');

function useMocks() {
  mediator.setStandingServiceGateway(true);
}

module.exports = {
  useMocks
}