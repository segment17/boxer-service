const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { controller, mediator } = require('../../src/index.js');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const Mediator = require('../../src/services/mediator.js');
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

Given('the boxer with the id {string} has matches', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('the latest boxer in the BoxerService database has id {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the AddBoxer endpoint is called with the test data', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the details of the created boxer are returned', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the id of the returned boxer is {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});