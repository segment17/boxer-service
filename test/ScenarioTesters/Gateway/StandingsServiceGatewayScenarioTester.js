
const DefaultScenarioTester = require('../DefaultScenarioTester');
const TestFunctions = require('../../TestFunctions');
const globalObjects = require('../../..');

class StandingsServiceGatewayScenarioTester extends DefaultScenarioTester {

  thereIsAnActiveStandingSpecifiedAsData(dataSource) {
    console.log("StandingsServiceGateway is getting mock data.");
    const specifiedStanding = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.StandingsServiceGateway.setupAddStanding(specifiedStanding);
  }

  unitFunctionIsInvokedWithDataChunk(functionName, dataSource) {
    const specifiedDataChunk = TestFunctions.extractSpecifiedObjectData(dataSource);
    if (functionName == "getStandingWithId") {
      globalObjects.StandingsServiceGateway.getStandingWithId(specifiedDataChunk.id).then(result => {
        globalObjects.result = result;
      })
    }
  }

  async returnedDataIsAsExpectedData(expectedDataSource) {
    const expectedData = TestFunctions.extractSpecifiedObjectData(expectedDataSource);
    await TestFunctions.waitUntilResult();
    console.log("Response expected: " + JSON.stringify(expectedData));
    console.log("Response returned: " + JSON.stringify(globalObjects.result));
  }

}

module.exports = StandingsServiceGatewayScenarioTester;
