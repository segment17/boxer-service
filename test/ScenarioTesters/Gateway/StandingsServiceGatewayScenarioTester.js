
const DefaultScenarioTester = require('../DefaultScenarioTester');
const TestFunctions = require('../../TestFunctions');
const globalObjects = require('../../..');
const assert = require('assert');

class StandingsServiceGatewayScenarioTester extends DefaultScenarioTester {

  thereIsAStandingWithMatchesSuchAs(dataSource) {
    console.log(dataSource);
    const specifiedStandingWithMatches = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.standingsServiceGateway.setupAddStandingWithMatches(specifiedStandingWithMatches);
  }

  unitFunctionIsInvokedWithData(functionName, dataSource) {
    const specifiedData = TestFunctions.extractSpecifiedObjectData(dataSource);
    if (functionName == "getStandingWithMatchesOfBoxer") {
      globalObjects.standingsServiceGateway.getStandingWithMatchesOfBoxer(specifiedData).then(result => {

        globalObjects.result = result;
      });
    }
  }

  async returnedDataIsAs(dataSource) {
    console.log(dataSource);
    const expectedData = TestFunctions.extractSpecifiedObjectData(dataSource);
    await TestFunctions.waitUntilResult();

    assert(globalObjects.result.code === undefined);
    assert(globalObjects.result.message === undefined);

    let standing = globalObjects.result;
    assert(standing !== undefined && standing !== null);
    assert.strictEqual(standing.boxer.id, expectedData.boxer.id);
    assert.strictEqual(standing.winCount, expectedData.winCount);
    assert.strictEqual(standing.lossCount, expectedData.lossCount);
    assert.strictEqual(standing.score,  expectedData.score);

    let matches = standing.matches;
    assert(matches != undefined && matches != null);
    assert(matches.length > 2);
    for (let index = 0; index < matches.length; index++) {
      const element = matches[index];
      assert(element.homeBoxer.id == expectedData.boxer.id || element.awayBoxer.id == expectedData.boxer.id);
    }
  }


}

module.exports = StandingsServiceGatewayScenarioTester;
