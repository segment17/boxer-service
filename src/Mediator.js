const StandingsServiceGateway = require('./Gateway/StandingsServiceGateway');
const MockStandingsServiceGateway = require('./Gateway/Mock/MockStandingsServiceGateway');
const BoxerRepository = require('./Repository/BoxerRepository');
const MockBoxerRepository = require('./Repository/Mock/MockBoxerRepository');

class Mediator {

  constructor() {
    this.standingsServiceGateway = new StandingsServiceGateway();
    this.boxerRepository = new BoxerRepository();
  }

  // Endpoints


  async getBoxerWithStandingAndMatches(id) {
    let boxer = await this.boxerRepository.getBoxerWithId(id);
    // Do validation here
    let standingAndMatches = await this.standingsServiceGateway.getStandingAndMatchesOfBoxer(id);
    // Do validation here
    return {
      boxer: boxer,
      standingAndMatches: standingAndMatches
    }
  }

  // Mock everything.
  mock() {
    this.standingsServiceGateway = new MockStandingsServiceGateway();
    this.boxerRepository = new MockBoxerRepository();
  }

}

module.exports = Mediator;
