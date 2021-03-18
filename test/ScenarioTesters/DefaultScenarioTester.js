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
      globalObjects.client.Mock({}, (err, res) => {
        globalObjects.done = true;
      });
    } else {
      globalObjects.done = true;
    }
  }

  async thereIsABoxerSuchAs(dataSource) {
    console.log("controller.mediator.BoxerRepository is getting mock data.");
    const specifiedBoxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    // globalObjects.controller.mediator.boxerRepository.setupAddBoxer(specifiedBoxer);
    await globalObjects.client.SetupAddBoxer({boxer: specifiedBoxer}, function (err, res) {
      globalObjects.done = true;
    });
  }

  endpointIsCalledWithRequestBody(endpoint, requestBodySource) {
    const requestBody = TestFunctions.extractSpecifiedObjectData(requestBodySource);
    assert(requestBody != undefined);
    if (endpoint == "GetBoxerWithStandingAndMatches") {
      globalObjects.client.GetBoxerWithStandingAndMatches(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    } else if (endpoint == "AddBoxer") {
      globalObjects.client.AddBoxer(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    } else if (endpoint == "EditBoxer") {
      globalObjects.client.EditBoxer(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    } else if (endpoint == "RemoveBoxer") {
      globalObjects.client.RemoveBoxer(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    } else {
      console.log("Endpoint not found!");
      assert(false);
    }
  }

  async responseIsAs(expectedResponseSource) {
    const expectedResponse = TestFunctions.extractSpecifiedObjectData(expectedResponseSource);
    await TestFunctions.waitUntilResult();

    const response = globalObjects.result;
    assert(response != null);
    assert(response.code === expectedResponse.code);
    assert.strictEqual(response.message, expectedResponse.message);
    assert(response.boxer.id === expectedResponse.boxer.id);
    assert(response.boxer.fullName === expectedResponse.boxer.fullName);
    // Strict equal fails because JavaScript BigInt is at max 2^53-1 however int64 is bigger than that. So whilst converting to protobuf data, it is converted to string. And String != BigInt
    assert.equal(response.boxer.birthDate, expectedResponse.boxer.birthDate);
    assert(response.boxer.height === expectedResponse.boxer.height);
    assert(response.boxer.weight === expectedResponse.boxer.weight);

    if (expectedResponse.standingAndMatches != undefined) {
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
          || element.awayBoxer.id == expectedResponse.boxer.id);
      }
    }

  }

  async thereIsAStandingAndMatchesSuchAs(dataSource) {
    const specifiedStandingAndMatches = TestFunctions.extractSpecifiedObjectData(dataSource);
    // globalObjects.controller.mediator.standingsServiceGateway.setupAddStandingAndMatches(specifiedStandingAndMatches);

    await globalObjects.client.SetupAddStandingAndMatches({standingAndMatches: specifiedStandingAndMatches}, function (err, res) {
      globalObjects.done = true;
    });
  }


  async thereIsATokenSuchAs(tokenDataSource) {
    const specifiedToken = TestFunctions.extractSpecifiedObjectData(tokenDataSource);
    assert(specifiedToken != undefined);
    // globalObjects.controller.mediator.authServiceGateway.setupToken(specifiedToken);
    await globalObjects.client.SetupAddToken({token: specifiedToken}, function (err, res) {
      globalObjects.done = true;
    });
  }

  theLatestBoxerInDBIsSuchAs(dataSource) {
    const boxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.controller.mediator.boxerRepository.setupAddLatest(boxer);
  }

  async dbHasBoxerSuchAs(dataSource) {
    const expected = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.result = null;
    globalObjects.client.GetBoxerWithStandingAndMatches({id: expected.id}, (err, res) => {
      globalObjects.result = res;
    });
    await TestFunctions.waitUntilResult();
    assert(globalObjects.result.code == 200);
    this.assertionsForDBHasBoxerSuchAs(expected, globalObjects.result.boxer);
  }

  async dbHasNoBoxerSuchAs(dataSource) {
    const expected = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.result = null;
    globalObjects.client.GetBoxerWithStandingAndMatches({id: expected.id}, (err, res) => {
      globalObjects.result = res;
    });
    await TestFunctions.waitUntilResult();
    assert(globalObjects.result.code == 404);
  }

  assertionsForDBHasBoxerSuchAs(expected, actual) {
    assert(actual != null);
    assert(expected.id == actual.id);
    assert(expected.birthDate == actual.birthDate);
    assert(expected.height == actual.height);
    assert(expected.weight == actual.weight);
  }

  assertionsForDBHasNoBoxerSuchAs(expected, actual) {
    assert(Object.entries(actual).length === 0);
  }
}

module.exports = DefaultScenarioTester;