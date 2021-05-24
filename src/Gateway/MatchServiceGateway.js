// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '../../../proto/ubc.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const ubc_package = grpc.loadPackageDefinition(packageDefinition).ubc_package;

class MatchServiceGateway {

  readyClient() {
    if (!this.client) {
      this.client = new ubc_package.MatchService(process.env.MATCH_SERVICE_ADDR || "0.0.0.0:50053", grpc.credentials.createInsecure());
    }
  }
  // Gateway exposed function
  async removeMatchesOfBoxer(boxerId, token) {
    let response = await this.doCallForRemoveMatchesOfBoxer(boxerId, token);
    return response;
  }

  async doCallForRemoveMatchesOfBoxer(boxerId, token) {
    this.readyClient();
    let response = await this.PROMISE_doCallForRemoveMatchesOfBoxer(boxerId, token);
    return response;
  }

  async PROMISE_doCallForRemoveMatchesOfBoxer(boxerId, token) {
    return new Promise((resolve, reject) => {
      this.client.RemoveMatchesOfBoxer({ boxerId: boxerId, token: token }, function (err, res) {
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

module.exports = MatchServiceGateway;
