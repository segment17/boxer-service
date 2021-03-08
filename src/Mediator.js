const StandingsServiceGateway = require('./Gateway/StandingsServiceGateway');
const MockStandingsServiceGateway = require('./Gateway/Mock/MockStandingsServiceGateway');
const BoxerRepository = require('./Repository/BoxerRepository');
const MockBoxerRepository = require('./Repository/Mock/MockBoxerRepository');

class Mediator {

  constructor() {
    this.StandingsServiceGateway = new StandingsServiceGateway();
    this.BoxerRepository = new BoxerRepository();
  }

  // Endpoints
  async getBoxerAndOwnerName(id) {
    console.log("Mediator.getBoxer called with id: " + id);
    let boxer = await this.BoxerRepository.getBoxerWithId(id);
    let owner = await this.StandingsServiceGateway.getStandingWithId(boxer.owner);
    return {
      boxer: boxer,
      ownerName: owner.name
    }
  }

  // Mock everything.
  mock() {
    this.StandingsServiceGateway = new MockStandingsServiceGateway();
    this.BoxerRepository = new MockBoxerRepository();
  }

}

module.exports = Mediator;
