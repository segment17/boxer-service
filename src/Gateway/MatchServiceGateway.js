class MatchServiceGateway {

  // Gateway exposed function
  async deleteMatchesOfBoxer(boxerId) {
    let response = await this.doCallForDeleteMatchesOfBoxer(token);
    return response;
  }

  async doCallForDeleteMatchesOfBoxer(obj) {
    return null;
  }

  async setupAddMatches(matches) {
    return null;
  }

}

module.exports = MatchServiceGateway;
