
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

Given('the standings service has data for the boxer with the id {string}', function (string) {
  returnedData = null;
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
});

When('getStandingAndMatchesOfABoxer function of gateway is called', function () {
  gateway.getStandingAndMatchesOfABoxer(1).then(data => {
    returnedData = data;
  });
});

Then('matches and standing of the boxer with the id {string} are returned', async function (string) {
  while (returnedData == null) {
    await sleep(100);
  }

  assert(returnedData.code === undefined);
  assert(returnedData.message === undefined);

  let standing = returnedData.standing;
  assert(standing !== undefined && standing !== null);
  assert(standing.boxer.id === 1);
  assert(standing.winCount === 1);
  assert(standing.lossCount === 1);
  assert(standing.score === 0.5);

  let matches = returnedData.matches;
  assert(matches != undefined && matches != null);
  assert(matches.length > 2);
  for (let index = 0; index < matches.length; index++) {
    const element = matches[index];
    assert(element.homeBoxer.id == 1 || element.awayBoxer.id == 1);
  }
});

Given('there is a boxer with the id {string}', function (string) {
  returnedData = null;
  //TODO Read from file
});

When('getBoxerWithId function of repository is called', function () {
  boxerRepository.getBoxerWithId(1).then(r => {
    returnedData = r;
  });
});

Then('the details of the boxer with the id {string} are returned', async function (string) {
  while (returnedData === null) {
    await sleep(100);
  }

  assert(returnedData.id === parseInt(string));
  assert(returnedData.fullName === "Mike Tyson");
  assert(returnedData.birthDate === 127419968);
  assert(returnedData.height === 178);
  assert(returnedData.weight === 100);
});
