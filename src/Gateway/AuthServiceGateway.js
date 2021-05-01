class AuthServiceGateway {

  // Template code

  // Gateway exposed function
  async getValidation(token) {
    let response = await this.doCallForGetValidation(token);
    return response;
  }

  async doCallForGetValidation(obj) {

    return {
      code: 200,
      message: "forbidden"
    }
  }

  async setupToken(obj) {
    return null;
  }

}

module.exports = AuthServiceGateway;
