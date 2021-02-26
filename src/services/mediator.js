const StandingsServiceGateway = require('../gateways/standingsServiceGateway.js');
const StubStandingsServiceGateway = require('../gateways/stubStandingsServiceGateway.js');
const BoxerRepository = require('../repositories/boxerRepository.js');
const StubBoxerRepository = require('../repositories/stubBoxerRepository.js');

class Mediator {
  constructor() {
    this.standingsServiceGateway = new StandingsServiceGateway();
    this.boxerRepository = new BoxerRepository();
  }

  setStandingServiceGateway(isMock) {
    if (isMock) {
      this.standingsServiceGateway = new StubStandingsServiceGateway();
    }
  }

  setBoxerRepository(isMock) {
    if (isMock) {
      this.boxerRepository = new StubBoxerRepository();
    }
  }

  async getBoxerWithStandingAndMatches(id) {

    let boxer = await this.boxerRepository.getBoxerWithId();
    let standingAndMatches = await this.standingsServiceGateway.getStandingAndMatchesOfABoxer(boxer.id);

    return {
      boxer: boxer,
      standingAndMatches: standingAndMatches
    };
  }
}

module.exports = Mediator;

