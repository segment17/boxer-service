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

  async guardAddBoxer(request) {
    // Do validation here

    let addedBoxer = await this.mediator.addBoxer(request.fullName, request.birthDate, request.height, request.weight);
    // Do validation here

    return {
      code: 201,
      message: 'created',
      boxer: addedBoxer
    }
  }

  async guardEditBoxer(request) {
    // Do validation here

    let editedBoxer = await this.mediator.editBoxer(request.id, request.fullName, request.birthDate, request.height, request.weight);
    // Do validation here

    return {
      code: 201,
      message: 'edited',
      boxer: editedBoxer
    }
  }

  async guardRemoveBoxer(request) {
    // Do validation here

    let removedBoxer = await this.mediator.removeBoxer(request.id);
    // Do validation here

    return {
      code: 201,
      message: 'removed',
      boxer: removedBoxer
    }
  }

  // Mock
  mock() {
    // Assign to mediator to mock everything it has.
    this.mediator.mock();
  }

}

module.exports = Controller;