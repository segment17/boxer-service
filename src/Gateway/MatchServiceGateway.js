class MatchServiceGateway {

  // Gateway exposed function
  async deleteMatchesOfBoxer(boxerId) {
    let response = await this.doCallForDeleteMatchesOfBoxer(boxerId);
    return response;
  }

  async doCallForDeleteMatchesOfBoxer(obj) {
    return null;
  }

  async setupAddMatches(matches) {
    return null;
  }

  async cleanUp() {
    // TODO
  }

}

module.exports = MatchServiceGateway;
