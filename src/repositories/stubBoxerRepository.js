let BoxerRepository = require('../repositories/boxerRepository');

class StubBoxerRepository extends BoxerRepository {

  async readBoxerFromDatabase(id) {
    return [{
      id: "1",
      fullName: "Mike Tyson",
      birthDate: 127419968, // Timestamp
      height: 178,
      weight: 100
    }];
  }

}

module.exports = StubBoxerRepository;