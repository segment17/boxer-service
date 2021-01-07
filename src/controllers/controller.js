
let mediator = require('../services/mediator.js');
let boxersRepository = require('../repositories/boxersRepository.js');


function mockStandingsServiceGateway() {
  mediator.setStandingServiceGateway(true);
}

function mockBoxersRepository() {
  boxersRepository = require('../repositories/boxersRepositoryMock.js');
}

module.exports = {
  mockBoxersRepository, mockStandingsServiceGateway
}
