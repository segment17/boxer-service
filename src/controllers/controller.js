
let mediator = require('../services/mediator.js');
let boxersRepository = require('../repositories/boxersRepository.js');


function mockStandingsServiceGateway() {
  mediator.setStandingServiceGateway(true);
}

function mockBoxersRepository() {
  boxersRepository = require('../repositories/boxersRepositoryMock.js');
}

function guardGetBoxerWithStandingAndMatches(request) {
  return true;
}

module.exports = {
  mockBoxersRepository, mockStandingsServiceGateway, guardGetBoxerWithStandingAndMatches
}
