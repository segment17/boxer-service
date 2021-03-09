const AuthServiceGateway = require('../AuthServiceGateway');

class MockAuthServiceGateway extends AuthServiceGateway {
  
  constructor() {
    super();
    this.token = null;
  }

  async doCallForGetValidation(obj) {
    const token = obj.token;
    console.log("Mock get call to AuthServiceGateway with token: " + token);
    if(this.token === token) {
      return {
        code: 200,
        message: "success"
      }
    }
    return {
      code: 404,
      message: "NOT_FOUND"
    }
  }

  async setupToken(obj) {
    this.token = obj;
    return;
  }
}

module.exports = MockAuthServiceGateway;
