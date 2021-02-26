

class StandingsServiceGateway {

  constructor() {

  }

  async getStandingAndMatchesOfABoxer(id) {
    let response = await this.doCall(id);
    let standingAndMatchesData = this.parseData(response);
    return standingAndMatchesData;
  }

  parseData(data) {
    return {
      standing: data.standing,
      matches: data.matches
    };
  }

  async doCall(id) {
    return {};
  }

}

module.exports = StandingsServiceGateway;


