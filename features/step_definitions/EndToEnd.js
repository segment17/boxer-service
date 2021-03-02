const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + "/../../proto/boxer-service.proto";
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const boxerservice_package = grpc.loadPackageDefinition(packageDefinition).boxerservice_package;
const standingsservice_package = grpc.loadPackageDefinition(packageDefinition).standingsservice_package;
const matchservice_package = grpc.loadPackageDefinition(packageDefinition).matchservice_package;
const authservice_package = grpc.loadPackageDefinition(packageDefinition).authservice_package;
Given('the {string} service is running', function (string) {
  // Write code here that turns the phrase above into concrete actions
  try {
    if (string == "boxer") {
      var boxerserviceClient = new boxerservice_package.BoxerService("0.0.0.0" + ":" + process.env.BOXER_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
    } else if (string == "standings") {
      var standingsserviceClient = new standingsservice_package.StandingsService("0.0.0.0" + ":" + process.env.STANDINGS_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
    } else if (string == "match") {
      var matchserviceClient = new matchservice_package.MatchService("0.0.0.0" + ":" + process.env.MATCH_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
    } else if (string == "auth") {
      var authserviceClient = new authservice_package.AuthService("0.0.0.0" + ":" + process.env.AUTH_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
    } else {
      assert(false);
    }
  } catch (error) {
    console.log(error);
    assert(false);
  }
  return true;
});
