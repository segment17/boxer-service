let { getStandingOfABoxer } = require('../gateways/standingsServiceGateway.js');

function setStandingServiceGateway(isMock) {
  if (isMock) {
    getStandingOfABoxer = require('../gateways/standingsServiceGatewayMock.js').getStandingOfABoxer;
  }
}

function call() {
  getStandingOfABoxer(1);
}

module.exports = {
  setStandingServiceGateway, call
};
