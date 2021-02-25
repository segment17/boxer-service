

var Controller = class Controller {

  constructor() {
    console.log("Controller is created.");
    this.mediator = require('../services/mediator.js');
    this.boxersRepository = require('../repositories/boxersRepository.js');
  }

  mockStandingsServiceGateway() {
    this.mediator.setStandingServiceGateway(true);
  }

  mockBoxersRepository() {
    console.log("mocked");
    this.boxersRepository = require('../repositories/boxersRepositoryMock.js');
  }

  guardGetBoxerWithStandingAndMatches(id) {
    const boxer = this.boxersRepository.getBoxerWithId(id);
    console.log("BOXER:" + boxer);
    return boxer; //TODO Implement
  }
}

module.exports = Controller;
