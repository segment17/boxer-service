// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '../../../proto/standingsservice.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const standingsservice_package = grpc.loadPackageDefinition(packageDefinition).standingsservice_package;

class StandingsServiceGateway {

  readyClient() {
    if (this.client == undefined || this.client == null) {
      if (process.env.STANDINGS_SERVICE_SERVICE_PORT != undefined) {
        this.client = new standingsservice_package.StandingsService(process.env.STANDINGS_SERVICE_SERVICE_HOST + ":" + process.env.STANDINGS_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
      } else {
        this.client = new standingsservice_package.StandingsService("0.0.0.0:50004", grpc.credentials.createInsecure());
      }
    }
  }

  // Gateway exposed function
  async getStandingAndMatchesOfBoxer(param) {
    let response = await this.doCallForGetStandingWithId(param);
    return this.extractStandingAndMatchesFromResponse(response);
  }

  // doCallFor[function name]
  async doCallForGetStandingWithId(param) {
    this.readyClient();
    let response = await this.PROMISE_doCallForGetStandingWithId(param);
    return response;
  }

  async PROMISE_doCallForGetStandingWithId(data) {
    return new Promise((resolve, reject) => {
      this.client.GetStandingAndMatchesOfBoxer({ boxerId: data }, function (err, res) {
        resolve(res);
      });
    });
  }

  async setupAddStandingAndMatches(obj) {
    this.readyClient();
    let response = await this.PROMISE_doCallForSetupAddMatches(obj.matches);
    return response;
  }

  async PROMISE_doCallForSetupAddMatches(data) {
    return new Promise((resolve, reject) => {
      this.client.SetupAddMatches({ matches: data }, function (err, res) {
        resolve(res);
      });
    });
  }

  extractStandingAndMatchesFromResponse(response) {
    return response.standingAndMatches;
  }

  async cleanUp() {
    this.readyClient();
    await this.PROMISE_doCallForCleanUp();
  }

  async PROMISE_doCallForCleanUp() {
    return new Promise((resolve, reject) => {
      this.client.SetupCleanUp({}, function (err, res) {
        resolve(res);
      });
    });
  }

}

module.exports = StandingsServiceGateway;
