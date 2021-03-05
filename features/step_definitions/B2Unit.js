
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let StubStandingsServiceGateway = require('../../src/gateways/stubStandingsServiceGateway');
let gateway = new StubStandingsServiceGateway();

let StubBoxerRepository = require('../../src/repositories/stubBoxerRepository');
let boxerRepository = new StubBoxerRepository();
let returnedData = null;

/* @Gateway
Scenario: Get validation from Auth Service Gateway
  Given the auth service has token "emanresu_ymmud_drowssap_ymmud"
  When getValidation function of gateway is called
  Then the response with code "200" and token "emanresu_ymmud_drowssap_ymmud" is returned

@Mediator
Scenario: Edit boxer details in Boxer Mediator
  Given the "boxers" repository is mocked
  #Change test data with file
  When the editBoxer function is called with the test data
  Then the edited boxer with the id "1" is returned

@Repository
Scenario: Edit boxer details in Boxer Repository
  Given there is a boxer with the id "1"
  #Change test data with file
  When editBoxerWithId function of repository is called with the test data
  Then the edited boxer with the id "1" is returned */