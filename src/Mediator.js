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

  async getValidation(token) {
    const response = await this.authServiceGateway.getValidation(token);
    return response;
  }

  async getBoxerWithStandingAndMatches(id) {
    let getBoxerResponse = await this.boxerRepository.getBoxerWithId(id);
    // Do validation here
    let standingAndMatches = await this.standingsServiceGateway.getStandingAndMatchesOfBoxer(id);
    // Do validation here
    return {
      code: getBoxerResponse.code,
      message: getBoxerResponse.message,
      boxer: getBoxerResponse.boxer,
      standingAndMatches: standingAndMatches
    }
  }

  async getBoxer(id) {
    let getBoxerResponse = await this.boxerRepository.getBoxerWithId(id);
    // Do validation here
    return {
      code: getBoxerResponse.code,
      message: getBoxerResponse.message,
      boxer: getBoxerResponse.boxer
    }
  }

  async addBoxer(token, fullName, birthDate, height, weight) {
    const validation = await this.getValidation(token);
    let response = {};
    if(validation.code !== 200) {
      response.code = validation.code;
      response.message = validation.message;
      response.boxer = { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 };
    } else {
      response = await this.boxerRepository.addBoxerWithGivenData(fullName, birthDate, height, weight);
    }
    return response;
  }

  async editBoxer(token, id, fullName, birthDate, height, weight) {
    const validation = await this.getValidation(token);
    let response = {};
    if(validation.code !== 200) {
      response.code = validation.code;
      response.message = validation.message;
      response.boxer = { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 };
    } else {
      response = await this.boxerRepository.editBoxerWithGivenData(id, fullName, birthDate, height, weight);
    }
    return response;
  }

  async removeBoxer(token, id) {
    const validation = await this.getValidation(token);
    let response = {};
    if(validation.code !== 200) {
      response.code = validation.code;
      response.message = validation.message;
      response.boxer = { id: 0, fullName: '', birthDate: '0', height: 0, weight: 0 };
    } else {
      response = await this.boxerRepository.removeBoxerWithId(id);
    }
    return response;
  }

  // Mock everything.
  mock() {
    this.standingsServiceGateway = new MockStandingsServiceGateway();
    this.authServiceGateway = new MockAuthServiceGateway();
    this.boxerRepository = new MockBoxerRepository();
  }

}

module.exports = Mediator;
