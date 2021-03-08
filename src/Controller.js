const Mediator = require('./Mediator');

class Controller {

  constructor() {
    this.mediator = new Mediator();
  }

  // Endpoint guards: guard[endpoint name]
  async guardGetBoxerWithStandingAndMatches(request) {
    //Do validation here

    let data = await this.mediator.getBoxerWithStandingAndMatches(request.id);
    // Do validation here
    return {
      code: 200,
      message: 'success',
      boxer: data.boxer,
      standingAndMatches: data.standingAndMatches
    }
  }

  // Mock
  mock() {
    // Assign to mediator to mock everything it has.
    this.mediator.mock();
  }

}

module.exports = Controller;