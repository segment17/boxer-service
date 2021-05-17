
const DefaultScenarioTester = require('../DefaultScenarioTester');
const TestFunctions = require('../../TestFunctions');
const globalObjects = require('../../..');
const assert = require('assert');

class MatchServiceGatewayScenarioTester extends DefaultScenarioTester {

  unitFunctionIsInvokedWithData(functionName, dataSource) {
    const boxerId = TestFunctions.extractSpecifiedObjectData(dataSource);
    if (functionName == "removeMatchesOfBoxer") {
      globalObjects.matchServiceGateway.removeMatchesOfBoxer(boxerId).then(result => {
        globalObjects.result = result;
      });
    }
  }

  async returnedDataIsAs(dataSource) {
    const expectedData = TestFunctions.extractSpecifiedObjectData(dataSource);
    await TestFunctions.waitUntilResult();
    assert(globalObjects.result.code === expectedData.code);
    assert(globalObjects.result.message === expectedData.message);
  }

  async thereAreMatchesSuchAs(dataSource) {
    const matches = TestFunctions.extractSpecifiedObjectData(dataSource);
    await globalObjects.matchServiceGateway.setupAddMatches(matches);
    globalObjects.done = true;
  }

}

module.exports = MatchServiceGatewayScenarioTester;
