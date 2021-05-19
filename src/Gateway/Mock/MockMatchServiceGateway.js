const MatchServiceGateway = require("../MatchServiceGateway");

class MockMatchServiceGateway extends MatchServiceGateway {

  constructor() {
    super();
    this.matches = []
  }

  async doCallForRemoveMatchesOfBoxer(obj) {
    return {code: 200, message: 'deleted'};
  }

  async setupAddMatches(matches) {
    for (let i = 0; i < matches.length; i++) {
      this.matches.push(matches[i]);
    }
  }

}

module.exports = MatchServiceGateway;
