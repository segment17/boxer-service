const Mediator = require('./Mediator');

class Controller {

  constructor() {
    this.mediator = new Mediator();
  }

  // Endpoint guards: guard[endpoint name]
  async guardGetBoxerWithStandingAndMatches(request) {
    //Do validation here

    let response = await this.mediator.getBoxerWithStandingAndMatches(request.id);
    // Do validation here
    return response;
  }

  async guardAddBoxer(request) {
    // Do validation here

    let response = await this.mediator.addBoxer(request.token, request.fullName, request.birthDate, request.height, request.weight);
    // Do validation here
    return response;
  }

  async guardEditBoxer(request) {
    // Do validation here
    let fullName = request.fullName != '' ? request.fullName : null;
    let birthDate = request.birthDate != '0' ? request.birthDate : null;
    let height = request.height != 0 ? request.height : null;
    let weight = request.weight != 0 ? request.weight : null;
    let response = await this.mediator.editBoxer(request.token, request.id, fullName, birthDate, height, weight);
    // Do validation here
    return response;

  }

  async guardRemoveBoxer(request) {
    // Do validation here

    let response = await this.mediator.removeBoxer(request.token, request.id);
    // Do validation here

    return response;
  }

  // Mock
  mock() {
    // Assign to mediator to mock everything it has.
    this.mediator.mock();
  }

}

module.exports = Controller;