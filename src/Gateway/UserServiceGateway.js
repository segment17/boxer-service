class UserServiceGateway {

  async getUserWithId(id) {
    let response = await this.doCallForGetUserWithId(id);
    let user = this.extractUserFromResponse(response);
    return user;
  }

  // doCallFor[function name]
  async doCallForGetUserWithId(id) {
    console.log("Real get call to UserServiceGateway with id: " + id);
    return {}; //TODO
  }

  async setupAddUser(user) {
    console.log("Real setup call to UserServiceGateway with user: " + JSON.stringify(user));
    return null;
  }

  extractUserFromResponse(response) {
    //TODO Parse response here...
    return response.user;
  }

}

module.exports = UserServiceGateway;
