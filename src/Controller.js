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
    if(Object.entries(data.boxer).length === 0) {
      return {
        code: 404,
        message: 'not_found',
        boxer: null,
        standingAndMatches: null
      }
    }
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
    console.log("ADDED BOXER");
    console.log(addedBoxer);

    if(Object.entries(addedBoxer).length === 0) {
      return {
        code: 400,
        message: 'bad_request',
        boxer: addedBoxer
      }
    }
    return {
      code: 201,
      message: 'created',
      boxer: addedBoxer
    }
  }

  async guardEditBoxer(request) {
    // Do validation here
    let fullName = request.fullName != '' ? request.fullName : null;
    let birthDate = request.birthDate != '0' ? request.birthDate : null;
    let height = request.height != 0 ? request.height : null;
    let weight = request.weight != 0 ? request.weight : null;
    let editedBoxer = await this.mediator.editBoxer(request.id, fullName, birthDate, height, weight);
    // Do validation here
    console.log("EDITED BOXER");
    console.log(editedBoxer);

    if(Object.entries(editedBoxer).length === 0) {
      return {
        code: 404,
        message: 'not_found',
        boxer: editedBoxer
      }
    }
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
    console.log("REMOVED BOXER");
    console.log(removedBoxer);

    if(Object.entries(removedBoxer).length === 0) {
      return {
        code: 404,
        message: 'not_found',
        boxer: removedBoxer
      }
    }
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