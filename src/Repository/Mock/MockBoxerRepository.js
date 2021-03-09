const BoxerRepository = require('../BoxerRepository');

class MockBoxerRepository extends BoxerRepository {

  constructor() {
    super();
    this.boxers = [];
  }

  async runQueryForGetBoxerWithId(id) {
    console.log("Mock read from Boxer mock data with id: " + id);
    for (let i = 0; i < this.boxers.length; i++) {
      const element = this.boxers[i];
      if (element.id == id) {
        return [element];
      }
    }
    return [];
  }

  async runQueryForAddBoxerWithGivenData(fullName, birthDate, height, weight) {
    let newBoxerId = this.boxers[this.boxers.length - 1].id + 1;
    let newBoxer = {
      id: newBoxerId,
      fullName: fullName,
      birthDate: birthDate,
      height: height,
      weight: weight
    }
    this.boxers.push(newBoxer);
    return newBoxer.id;
  }

  async setupAddBoxer(boxer) {
    this.boxers.push(boxer);
    return null;
  }

  async setupAddLatest(boxer) {
    this.setupAddBoxer(boxer);
    return null;
  }
}

module.exports = MockBoxerRepository;
