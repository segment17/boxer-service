const UserServiceGateway = require('./Gateway/UserServiceGateway');
const MockUserServiceGateway = require('./Gateway/Mock/MockUserServiceGateway');
const GreetingRepository = require('./Repository/GreetingRepository');
const MockGreetingRepository = require('./Repository/Mock/MockGreetingRepository');

class Mediator {

  constructor() {
    this.userServiceGateway = new UserServiceGateway();
    this.greetingRepository = new GreetingRepository();
  }

  // Endpoints
  async getGreetingAndOwnerName(id) {
    console.log("Mediator.getGreeting called with id: " + id);
    let greeting = await this.greetingRepository.getGreetingWithId(id);
    let owner = await this.userServiceGateway.getUserWithId(greeting.owner);
    return {
      greeting: greeting,
      ownerName: owner.name
    }
  }

  // Mock everything.
  mock() {
    this.userServiceGateway = new MockUserServiceGateway();
    this.greetingRepository = new MockGreetingRepository();
  }

}

module.exports = Mediator;
