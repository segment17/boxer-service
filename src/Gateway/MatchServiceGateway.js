// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '../../../proto/matchservice.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const matchservice_package = grpc.loadPackageDefinition(packageDefinition).matchservice_package;
// GRPC SETUP

class MatchServiceGateway {

  readyClient() {
    if (this.client == undefined || this.client == null) {
      if (process.env.MATCH_SERVICE_SERVICE_PORT != undefined) {
        this.client = new matchservice_package.MatchService(process.env.MATCH_SERVICE_SERVICE_HOST + ":" + process.env.MATCH_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
      } else {
        this.client = new matchservice_package.MatchService("0.0.0.0:50003", grpc.credentials.createInsecure());
      }
    }
  }
  // Gateway exposed function
  async deleteMatchesOfBoxer(boxerId) {
    let response = await this.doCallForDeleteMatchesOfBoxer(boxerId);
    return response;
  }

  async doCallForDeleteMatchesOfBoxer(obj) {
    this.readyClient();
    let response = await this.PROMISE_doCallForDeleteMatchesOfBoxer(matches);
    return response;
  }

  async PROMISE_doCallForDeleteMatchesOfBoxer(matches) {
    return new Promise((resolve, reject) => {
      this.client.RemoveMatchesOfBoxer({ matches: matches }, function (err, res) {
        resolve(res);
      });
    });
  }

  async setupAddMatches(matches) {
    this.readyClient();
    let response = await this.PROMISE_doCallForSetupAddMatches(matches);
    return response;
  }

  async PROMISE_doCallForSetupAddMatches(matches) {
    return new Promise((resolve, reject) => {
      this.client.SetupAddMatches({ matches: matches }, function (err, res) {
        resolve(res);
      });
    });
  }

  async cleanUp() {
    // TODO
  }

}

module.exports = MatchServiceGateway;
