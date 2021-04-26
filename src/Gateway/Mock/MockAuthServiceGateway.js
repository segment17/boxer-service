const AuthServiceGateway = require('../AuthServiceGateway');

class MockAuthServiceGateway extends AuthServiceGateway {
  
  constructor() {
    super();
    this.token = null;
  }

  async doCallForGetValidation(obj) {
    const token = obj;
    if(this.token === token) {
      return {
        code: 200,
        message: "success"
      }
    }
    return {
      code: 403,
      message: "forbidden"
    }
  }

  async setupToken(obj) {
    this.token = obj;
    return;
  }
}

module.exports = MockAuthServiceGateway;
