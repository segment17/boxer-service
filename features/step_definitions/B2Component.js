const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { controller, mediator } = require('../../src/index.js');
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
let currentlyRunningScenarioTags = [];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

Before(function (scenario) {
  response = null;
  currentlyRunningScenarioTags = [];
  extractTags(scenario);
});

function extractTags(scenario) {
  const tagObjects = scenario.pickle.tags;
  for (let index = 0; index < tagObjects.length; index++) {
    const element = tagObjects[index];
    currentlyRunningScenarioTags.push(element.name);
  }
}

When('the EditBoxer endpoint is called with the test data', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the edited boxer with the id "1" is returned', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});