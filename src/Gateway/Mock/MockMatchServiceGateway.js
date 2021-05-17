const MatchServiceGateway = require("../MatchServiceGateway");

class MockMatchServiceGateway extends MatchServiceGateway {

  constructor() {
    super();
    this.matches = []
  }

  async doCallForDeleteMatchesOfBoxer(obj) {
    return {code: 200, message: 'deleted'};
  }

  async setupAddMatches(matches) {
    for (let i = 0; i < matches.length; i++) {
      const element = matches[i];
      this.matches.push(element);
    }
  }

}

module.exports = MatchServiceGateway;
