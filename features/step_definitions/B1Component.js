const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { controller } = require('../../src/index.js');
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
var client;
if (process.env.BOXER_SERVICE_SERVICE_PORT != undefined) {
  var client = new boxerservice_package.BoxerService("0.0.0.0" + ":" + process.env.BOXER_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
} else {
  var client = new boxerservice_package.BoxerService("0.0.0.0:50001", grpc.credentials.createInsecure());
}
var response = null;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

Given('the {string} service gateway is mocked', function (string) {
  if (string == "standings") {
    controller.mockStandingsServiceGateway();
  }
});

Given('the {string} repository is mocked', function (string) {
  if (string == "boxers") {
    controller.mockBoxersRepository();
  }
});

When('the GetBoxerWithStandingAndMatches endpoint is called', function () {
  client.getBoxerWithStandingAndMatches({ id: 1 }, async function (err, res) {
    response = res;
  });
});

Then('the boxer with the id {string} and his matches and standing are returned', async function (string) {
  while (response == null) {
    await sleep(100);
  }
  assert(response != null);
  assert(response.id == string);
  assert(response.fullName == "Mike Tyson");
  assert(response.birthDate == 127419968);
  assert(response.height == 178);
  assert(response.weight == 100);
  //Assert matches and standing as well
});