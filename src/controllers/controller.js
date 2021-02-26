const StubBoxerRepository = require('../repositories/stubBoxerRepository.js');
let Mediator = require('../services/mediator.js');

var Controller = class Controller {

  constructor() {
    this.mediator = new Mediator();
    this.boxerRepository = require('../repositories/boxerRepository.js');
  }

  mockStandingsServiceGateway() {
    this.mediator.setStandingServiceGateway(true);
  }

  mockBoxersRepository() {
    this.mediator.setBoxerRepository(true);
  }

  async guardGetBoxerWithStandingAndMatches(id) {
    //Check that id is valid, boxer exists etc


    let data = await this.mediator.getBoxerWithStandingAndMatches(id);

    if (data == null) {
      return {
        code: 404, //Analyze the error
        message: "not_found" //Real error message
      }
    } else {
      return {
        code: 200,
        message: 'success',
        boxer: data.boxer,
        standingAndMatches: data.standingAndMatches
      }
    }
  }
}

module.exports = Controller;
