const { Given, When, Then, Before } = require('@cucumber/cucumber');
const TestFunctions = require('../TestFunctions');
const globalObjects = require('../../index');
const assert = require('assert');
const { ifError } = require('assert');
const { ECANCELED } = require('constants');
const { getMatchesOfBoxer } = require('./DBAccessor/MatchServiceDBAccessor');

class DefaultScenarioTester {

  constructor(scenario) {
    this.scenario = scenario;
  }

  // Special Before Scenario Function
  before() {
    globalObjects.reset();
    globalObjects.setScenario(this.scenario);
    if (!TestFunctions.isScenarioE2E(this.scenario) && !TestFunctions.isScenarioIntegration(this.scenario)) {
      // If it's not E2E or Integration, it means everything is mocked.
      globalObjects.mock();
      globalObjects.client.Mock({}, (err, res) => {
        globalObjects.done = true;
      });
    } else {
      globalObjects.boxerRepository.enterIntegratedTestingEnvironment();
      globalObjects.client.EnterIntegratedTestingEnvironment({}, (err, res) => {
        globalObjects.done = true;
      });
    }
  }

  async thereIsABoxerSuchAs(dataSource) {
    const specifiedBoxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    await globalObjects.client.SetupAddBoxer({ boxer: specifiedBoxer }, function (err, res) {
      globalObjects.done = true;
    });
  }

  async latestBoxerInDBIsSuchAs(dataSource) {
    const specifiedBoxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    var self = this;
    await globalObjects.client.SetupAddLatestBoxer({ boxer: specifiedBoxer }, async function (err, res) {
      self.lastInsertId = await globalObjects.boxerRepository.getLatestId();
      globalObjects.done = true;
    });
  }



  endpointIsCalledWithRequestBody(endpoint, requestBodySource) {
    this.endpoint = endpoint;
    const requestBody = TestFunctions.extractSpecifiedObjectData(requestBodySource);
    assert(requestBody != undefined);

    if (endpoint == "GetBoxerWithStandingAndMatches") {
      globalObjects.client.GetBoxerWithStandingAndMatches(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    }  else if (endpoint == "AddBoxer") {
      globalObjects.client.AddBoxer(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    } else if (endpoint == "EditBoxer") {
      globalObjects.client.EditBoxer(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    }  else if (endpoint == "RemoveBoxer") {
      globalObjects.client.RemoveBoxer(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    } else if (endpoint == "GetBoxer") {
      globalObjects.client.GetBoxer(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    }  else {
      assert(false);
    }
  }

  async responseIsAs(expectedResponseSource) {
    const expectedResponse = TestFunctions.extractSpecifiedObjectData(expectedResponseSource);
    if (expectedResponse.boxer.id != 0 && this.endpoint == "AddBoxer" && this.lastInsertId != undefined) {
      expectedResponse.boxer.id = this.lastInsertId + 1;
    }
    await TestFunctions.waitUntilResult();
    const response = globalObjects.result;
    assert(response != null);
    assert(response.code === expectedResponse.code);
    assert.strictEqual(response.message, expectedResponse.message);
    
    if (expectedResponse.boxer && expectedResponse.boxer.id === 0) {
      assert(response.boxer.id === 0);
    } else {
      assert.strictEqual(response.boxer.id, expectedResponse.boxer.id);
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
        if (standing.boxer) {
          assert.strictEqual(standing.boxer.id, expectedResponse.boxer.id);
        }
        
        assert(standing.winCount == expectedResponse.standingAndMatches.standing.winCount);
        assert(standing.lossCount == expectedResponse.standingAndMatches.standing.lossCount);
        assert(standing.score == expectedResponse.standingAndMatches.standing.score);

        let matches = standingAndMatches.matches;
        assert(matches != undefined && matches != null);
        if (matches.length > 2) {
          for (let index = 0; index < matches.length; index++) {
            assert(matches[index].homeBoxerId == expectedResponse.boxer.id
              || matches[index].awayBoxerId == expectedResponse.boxer.id);
          }
        }
      }
    }
  }

  async thereIsAStandingAndMatchesSuchAs(dataSource) {
    await globalObjects.client.SetupAddStandingAndMatches({ standingAndMatches: TestFunctions.extractSpecifiedObjectData(dataSource) }, function (err, res) {
      globalObjects.done = true;
    });
  }


  async thereIsATokenSuchAs(tokenDataSource) {
    const specifiedToken = TestFunctions.extractSpecifiedObjectData(tokenDataSource);
    assert(specifiedToken != undefined);
    await globalObjects.client.SetupAddToken({ token: specifiedToken }, function (err, res) {
      globalObjects.done = true;
    });
  }

  async dbHasBoxerSuchAs(dataSource) {
    const expected = TestFunctions.extractSpecifiedObjectData(dataSource);
    if (this.lastInsertId != undefined) {
      expected.id = this.lastInsertId + 1;
    }

    globalObjects.result = globalObjects.unreturnableContentForResult;
    await globalObjects.client.GetBoxerWithStandingAndMatches({ id: expected.id }, (err, res) => {
      globalObjects.result = res;
    });
    await TestFunctions.waitUntilResult();
    assert(globalObjects.result.code == 200);
    this.assertionsForDBHasBoxerSuchAs(expected, globalObjects.result.boxer);
  }

  async dbHasNoBoxerSuchAs(dataSource) {
    const expected = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.result = globalObjects.unreturnableContentForResult;
    await globalObjects.client.GetBoxerWithStandingAndMatches({ id: expected.id }, (err, res) => {
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

  async thereAreMatchesSuchAs(dataSource) {
    await globalObjects.client.SetupAddMatches({ matches: TestFunctions.extractSpecifiedObjectData(dataSource) }, function (err, res) {
      globalObjects.done = true;
    });
  }

  async matchServiceDoesNotHaveAnyMatchesOfBoxer(boxerDataSource) {
    const boxer = TestFunctions.extractSpecifiedObjectData(boxerDataSource);
    let matchesOfBoxer = await getMatchesOfBoxer(boxer.id);
    assert(matchesOfBoxer.length == 0);
  }
}

module.exports = DefaultScenarioTester;