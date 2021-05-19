const Mediator = require('./Mediator');

class Controller {

  constructor() {
    this.mediator = new Mediator();
  }

  async guardSetupAddBoxer (request) {
    await this.mediator.boxerRepository.setupAddBoxer(request.boxer);
    return {
      code: 200
    }
  }

  async guardSetupAddLatestBoxer (request) {
    await this.mediator.boxerRepository.setupAddLatest(request.boxer);
    return {
      code: 200
    }
  }

  async guardSetupClearBoxers () {
    await this.mediator.boxerRepository.cleanUp();
    return {
      code: 200
    }

  }

  // Endpoint guards: guard[endpoint name]
  async guardGetBoxerWithStandingAndMatches(request) {
    if(isNaN(request.id) || request.id < 0 || request.id === null || request.id === undefined) {
      return {
        code: "400",
        message: "bad_request",
        boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
      }
    }
    let response = await this.mediator.getBoxerWithStandingAndMatches(request.id);
    return response;
  }

    // Endpoint guards: guard[endpoint name]
    async guardGetBoxer(request) {
      if(isNaN(request.id) || request.id < 0 || request.id === null || request.id === undefined) {
        return {
          code: "400",
          message: "bad_request",
          boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
        }
      }
      let response = await this.mediator.getBoxer(request.id);
      return response;
    }

  async guardAddBoxer(request) {
    if(this.isStrInvalid(request.token) || this.isStrInvalid(request.fullName)
      || this.isIntIneligible(request.birthDate, false) || this.isIntIneligible(request.height, true) 
      || this.isIntIneligible(request.weight, true)
    ) {
      return {
        code: "400",
        message: "bad_request",
        boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
      }
    }
    let response = await this.mediator.addBoxer(request.token, request.fullName, request.birthDate, request.height, request.weight);
    return response;
  }

  async guardEditBoxer(request) {
    if(this.isStrInvalid(request.token)
      || this.isIntIneligible(request.id, true)
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
    return response;
  }

  async guardRemoveBoxer(request) {
    if(this.isStrInvalid(request.token) || this.isIntIneligible(request.id, true)
    ) {
      return {
        code: "400",
        message: "bad_request",
        boxer: { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 }
      }
    }
    let response = await this.mediator.removeBoxer(request.token, request.id);
    return response;
  }

  // Helper functions
  
  isStrInvalid(data) {
    return (typeof data !== "string" || data === "" || data === null || data === undefined);
  }

  isIntIneligible(intData, nonZeroCheck=false) {
    return (isNaN(intData) || (nonZeroCheck === true ? (data < 0) : true) || data === null || data === undefined);
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