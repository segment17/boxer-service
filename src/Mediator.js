const StandingsServiceGateway = require('./Gateway/StandingsServiceGateway');
const AuthServiceGateway = require('./Gateway/AuthServiceGateway');
const MockStandingsServiceGateway = require('./Gateway/Mock/MockStandingsServiceGateway');
const MockAuthServiceGateway = require('./Gateway/Mock/MockAuthServiceGateway');
const BoxerRepository = require('./Repository/BoxerRepository');
const MockBoxerRepository = require('./Repository/Mock/MockBoxerRepository');

class Mediator {

  constructor() {
    this.standingsServiceGateway = new StandingsServiceGateway();
    this.authServiceGateway = new AuthServiceGateway();
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

  async getValidation(token) {
    return null;
  }

  // Mock everything.
  mock() {
    this.standingsServiceGateway = new MockStandingsServiceGateway();
    this.authServiceGateway = new MockAuthServiceGateway();
    this.boxerRepository = new MockBoxerRepository();
  }

}

module.exports = Mediator;
