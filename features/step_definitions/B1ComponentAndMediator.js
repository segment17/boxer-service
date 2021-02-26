const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { controller } = require('../../src/index.js');
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
var client;
if (process.env.BOXER_SERVICE_SERVICE_PORT != undefined) {
  var client = new boxerservice_package.BoxerService("0.0.0.0" + ":" + process.env.BOXER_SERVICE_SERVICE_PORT, grpc.credentials.createInsecure());
} else {
  var client = new boxerservice_package.BoxerService("0.0.0.0:50001", grpc.credentials.createInsecure());
}
var response = null;
let currentlyRunningScenarioTags = [];

var mediator = new Mediator();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

Before(function (scenario) {
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

Given('the {string} service gateway is mocked', function (string) {
  if (string == "standings") {
    if (currentlyRunningScenarioTags.includes("@Mediator")) {
      mediator.setStandingServiceGateway(true);
    } else {
      controller.mockStandingsServiceGateway();
    }
    
  }
});

Given('the {string} repository is mocked', function (string) {
  if (string == "boxers") {
    if (currentlyRunningScenarioTags.includes("@Mediator")) {
      mediator.setBoxerRepository(true);
    } else {
      controller.mockBoxersRepository();
    }
  }
});

When('the GetBoxerWithStandingAndMatches endpoint is called', function () {
  client.getBoxerWithStandingAndMatches({ id: 1 }, function (err, res) {
    response = res;
  });
});

Then('the boxer with the id {string} and his matches and standing are returned', async function (string) {
  while (response == null) {
    await sleep(100);
  }
  assert(response != null);
  if (currentlyRunningScenarioTags.includes("@Component")) {
    assert(response.code == 200);
    assert(response.message == "success");
  }
  assert(response.boxer.id === parseInt(string));
  assert(response.boxer.fullName == "Mike Tyson");
  assert(response.boxer.birthDate == 127419968);
  assert(response.boxer.height == 178);
  assert(response.boxer.weight == 100);
  let standingAndMatches = response.standingAndMatches;
  assert(standingAndMatches != undefined && standingAndMatches != null);
  let standing = standingAndMatches.standing;
  assert(standing != undefined && standing != null);
  assert(JSON.stringify(standing.boxer) == JSON.stringify(response.boxer));
  assert(standing.winCount == 1);
  assert(standing.lossCount == 1);
  assert(standing.score == 0.5);
  let matches = standingAndMatches.matches;
  assert(matches != undefined && matches != null);
  assert(matches.length > 2);
  for (let index = 0; index < matches.length; index++) {
    const element = matches[index];
    console.log("ESASBOXER", response.boxer);
    console.log("HOMEBOXER", element.homeBoxer);
    console.log("AWAYBOXER", element.awayBoxer);
    assert(JSON.stringify(element.homeBoxer) == JSON.stringify(response.boxer) 
    || JSON.stringify(element.awayBoxer) == JSON.stringify(response.boxer));
  }
});

When('the getBoxerWithStandingAndMatches function is called', function () {
  mediator.getBoxerWithStandingAndMatches(1).then(r => {
    response = r;
  });
});