


class BoxerRepository {

  constructor() {

  }

  async getBoxerWithId(id) {
    let queryResult = await this.readBoxerFromDatabase(id);
    return this.parseBoxerData(queryResult);
  }

  parseBoxerData(queryResult) {
    return queryResult[0];
  }

  async readBoxerFromDatabase(id) {
    return {};
  }

}

module.exports = BoxerRepository;
