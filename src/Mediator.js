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
  async getBoxerAndOwnerName(id) {
    console.log("Mediator.getBoxer called with id: " + id);
    let boxer = await this.boxerRepository.getBoxerWithId(id);
    let owner = await this.standingsServiceGateway.getStandingWithId(boxer.owner);
    return {
      boxer: boxer,
      ownerName: owner.name
    }
  }

  // Mock everything.
  mock() {
    this.standingsServiceGateway = new MockStandingsServiceGateway();
    this.boxerRepository = new MockBoxerRepository();
  }

}

module.exports = Mediator;
