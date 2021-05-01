const Mediator = require('./Mediator');

class Controller {

  constructor() {
    this.mediator = new Mediator();
  }

  // Endpoint guards: guard[endpoint name]
  async guardGetBoxerWithStandingAndMatches(request) {
    //Do validation here
    if(isNaN(request.id) || request.id < 0 || request.id === null || request.id === undefined) {
      return {
        code: "400",
        message: "bad_request",
        boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
      }
    }
    let response = await this.mediator.getBoxerWithStandingAndMatches(request.id);
    // Do validation here
    return response;
  }

  async guardAddBoxer(request) {
    // Do validation here
    if(typeof request.token !== "string" || request.token === "" || request.token === null || request.token === undefined
      || typeof request.fullName !== "string" || request.fullName === "" || request.fullName === null || request.fullName === undefined
      || isNaN(request.birthDate) || request.birthDate === null || request.birthDate === undefined
      || isNaN(request.height) || request.height < 0 || request.height === null || request.height === undefined
      || isNaN(request.weight) || request.weight < 0 || request.weight === null || request.weight === undefined
    ) {
      return {
        code: "400",
        message: "bad_request",
        boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
      }
    }
    let response = await this.mediator.addBoxer(request.token, request.fullName, request.birthDate, request.height, request.weight);
    // Do validation here
    return response;
  }

  async guardEditBoxer(request) {
    // Do validation here
    if(typeof request.token !== "string" || request.token === "" || request.token === null || request.token === undefined
      || isNaN(request.id) || request.id < 0 || request.id === null || request.id === undefined
      || (request.fullName !== null && request.fullName !== undefined && (typeof request.fullName !== "string" || request.fullName === ""))
      || (request.birthDate !== null && request.birthDate !== undefined && isNaN(request.birthDate))
      || (request.height !== null && request.height !== undefined && (isNaN(request.height) || request.height < 0))
      || (request.weight !== null && request.weight !== undefined && (isNaN(request.weight) || request.weight < 0))
    ) {
      return {
        code: "400",
        message: "bad_request",
        boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
      }
    }
    let response = await this.mediator.editBoxer(request.token, request.id, request.fullName, request.birthDate, request.height, request.weight);
    // Do validation here
    return response;

  }

  async guardRemoveBoxer(request) {
    // Do validation here
    if(typeof request.token !== "string" || request.token === "" || request.token === null || request.token === undefined
      || isNaN(request.id) || request.id < 0 || request.id === null || request.id === undefined
    ) {
      return {
        code: "400",
        message: "bad_request",
        boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
      }
    }
    let response = await this.mediator.removeBoxer(request.token, request.id);
    // Do validation here

    return response;
  }



  // Mock
  mock() {
    // Assign to mediator to mock everything it has.
    this.mediator.mock();
  }

  enterIntegratedTestingEnvironment() {
    this.mediator.boxerRepository.enterIntegratedTestingEnvironment();
  }

}

module.exports = Controller;