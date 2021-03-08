const { Given, When, Then, Before } = require('@cucumber/cucumber');
const TestFunctions = require('../TestFunctions');
const globalObjects = require('../../index');
const assert = require('assert');

class DefaultScenarioTester {

  constructor(scenario) {
    this.scenario = scenario;
  }

  // Special Before Scenario Function
  before() {
    globalObjects.resetResult();
    globalObjects.setScenario(this.scenario);
    if (!TestFunctions.isScenarioE2E(this.scenario) && !TestFunctions.isScenarioIntegration(this.scenario)) {
      // If it's not E2E or Integration, it means everything is mocked.
      globalObjects.mock();
    }
  }

  thereIsAnActiveStandingSpecifiedAsData(dataSource) {
    console.log("controller.mediator.StandingsServiceGateway is getting mock data.");
    const specifiedStanding = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.controller.mediator.StandingsServiceGateway.setupAddStanding(specifiedStanding);
  }

  thereIsABoxerSuchAs(dataSource) {
    console.log("controller.mediator.BoxerRepository is getting mock data.");
    const specifiedBoxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.controller.mediator.boxerRepository.setupAddBoxer(specifiedBoxer);
  }

  endpointIsCalledWithRequestBody(endpoint, requestBodySource) {
    const requestBody = TestFunctions.extractSpecifiedObjectData(requestBodySource);
    if (endpoint == "GetBoxerWithStandingAndMatches") {
      globalObjects.client.GetBoxerWithStandingAndMatches(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    }
  }

  async responseIsAs(expectedResponseSource) {
    const expectedResponse = TestFunctions.extractSpecifiedObjectData(expectedResponseSource);
    await TestFunctions.waitUntilResult();
    const response = globalObjects.result;
    assert(response != null);
    assert(response.code === expectedResponse.code);
    assert(response.message === expectedResponse.message);
    assert(response.boxer.id === expectedResponse.boxer.id);
    assert(response.boxer.fullName === expectedResponse.boxer.fullName);
    // Strict equal fails because JavaScript BigInt is at max 2^53-1 however int64 is bigger than that. So whilst converting to protobuf data, it is converted to string. And String != BigInt
    assert.equal(response.boxer.birthDate, expectedResponse.boxer.birthDate);
    assert(response.boxer.height === expectedResponse.boxer.height);
    assert(response.boxer.weight === expectedResponse.boxer.weight);

    let standingAndMatches = response.standingAndMatches;
    assert(standingAndMatches != undefined && standingAndMatches != null);

    let standing = standingAndMatches.standing;
    assert(standing != undefined && standing != null);
    assert.strictEqual(standing.boxer.id, expectedResponse.boxer.id);
    assert(standing.winCount == expectedResponse.standingAndMatches.standing.winCount);
    assert(standing.lossCount == expectedResponse.standingAndMatches.standing.lossCount);
    assert(standing.score == expectedResponse.standingAndMatches.standing.score);

    let matches = standingAndMatches.matches;
    assert(matches != undefined && matches != null);
    assert(matches.length > 2);
    for (let index = 0; index < matches.length; index++) {
      const element = matches[index];
      assert(element.homeBoxer.id == expectedResponse.boxer.id
        || element.awayBoxer.id  == expectedResponse.boxer.id);
    }
  }

  thereIsAStandingAndMatchesSuchAs(dataSource) {
    const specifiedStandingAndMatches = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.controller.mediator.standingsServiceGateway.setupAddStandingAndMatches(specifiedStandingAndMatches);
  }

  thereIsATokenSuchAs(tokenDataSource) {
    const specifiedToken = TestFunctions.extractSpecifiedObjectData(tokenDataSource);
    globalObjects.controller.mediator.authServiceGateway.setupToken(specifiedToken);
  }

}

module.exports = DefaultScenarioTester;