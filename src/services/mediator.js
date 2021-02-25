let standingsServiceGateway = require('../gateways/standingsServiceGateway.js');
function setStandingServiceGateway(isMock) {
  if (isMock) {
    standingsServiceGateway = require('../gateways/standingsServiceGatewayMock.js');
  }
}

module.exports = {
  setStandingServiceGateway
};
