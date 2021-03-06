const globalObjects = require('../../..');
const ScenarioTester = require('../ScenarioTester');
const TestFunctions = require('../../TestFunctions');

class UserServiceGatewayScenarioTester extends ScenarioTester {

  thereIsAnActiveUserSpecifiedAsData(dataSource) {
    console.log("userServiceGateway is getting mock data.");
    const specifiedUser = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.userServiceGateway.setupAddUser(specifiedUser);
  }

  unitFunctionIsInvokedWithDataChunk(functionName, dataSource) {
    const specifiedDataChunk = TestFunctions.extractSpecifiedObjectData(dataSource);
    if (functionName == "getUserWithId") {
      globalObjects.userServiceGateway.getUserWithId(specifiedDataChunk.id).then(result => {
        globalObjects.result = result;
      })
    }
  }

  async returnedDataIsAsExpectedData(expectedDataSource) {
    const expected_data = TestFunctions.extractSpecifiedObjectData(expectedDataSource);
    await TestFunctions.waitUntilResult();
    console.log("Response expected: " + JSON.stringify(expected_data));
    console.log("Response returned: " + JSON.stringify(globalObjects.result));
  }

}

module.exports = UserServiceGatewayScenarioTester;
