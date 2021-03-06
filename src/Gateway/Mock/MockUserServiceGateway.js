const UserServiceGateway = require('../UserServiceGateway');

class MockUserServiceGateway extends UserServiceGateway {
  
  constructor() {
    super();
    this.users = []
  }

  async doCallForGetUserWithId(id) {
    console.log("Mock get call to UserServiceGateway with id: " + id);
    for (let i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      if (element.id == id)
        return {
          code: 200,
          user: element
        }
    }
    return {
      code: 404
    }
  }

  async setupAddUser(user) {
    console.log("Mock setup call to MockUserServiceGateway with user: " + JSON.stringify(user));
    this.users.push(user);
    return null;
  }
}

module.exports = MockUserServiceGateway;
