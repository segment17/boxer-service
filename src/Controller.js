const Mediator = require('./Mediator');

class Controller {

  constructor() {
    this.mediator = new Mediator();
  }

  // Endpoint guards: guard[endpoint name]
  async guardGetGreeting(request) {
    //TODO Request validation
    console.log("guardGetGreeting received request body: " + JSON.stringify(request));
    let responseData = await this.mediator.getGreetingAndOwnerName(request.id);
    return {
      code: 200,
      greeting: responseData.greeting,
      ownerName: responseData.ownerName
    }
  }

  // Mock
  mock() {
    // Assign to mediator to mock everything it has.
    this.mediator.mock();
  }

}

module.exports = Controller;