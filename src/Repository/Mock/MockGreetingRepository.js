const GreetingRepository = require('../GreetingRepository');

class MockGreetingRepository extends GreetingRepository {

  constructor() {
    super();
    this.greetings = [];
  }

  async runQueryForGetGreetingWithId(id) {
    console.log("Mock read from Greeting mock data with id: " + id);
    for (let i = 0; i < this.greetings.length; i++) {
      const element = this.greetings[i];
      if (element.id == id) {
        return [element];
      }
    }
    return [];
  }

  async setupAddGreeeting(greeting) {
    console.log("Mock write to Greeting mock data with object: " + JSON.stringify(greeting));
    this.greetings.push(greeting);
    return null;
  }
}

module.exports = MockGreetingRepository;
