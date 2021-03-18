
const DefaultScenarioTester = require('../DefaultScenarioTester');
const TestFunctions = require('../../TestFunctions');
const globalObjects = require('../../..');
const assert = require('assert');

class AuthServiceGatewayScenarioTester extends DefaultScenarioTester {

  async thereIsATokenSuchAs(tokenDataSource) {
    const specifiedToken = TestFunctions.extractSpecifiedObjectData(tokenDataSource);
    await globalObjects.authServiceGateway.setupToken(specifiedToken);
    globalObjects.done = true;
  }

  unitFunctionIsInvokedWithData(functionName, dataSource) {
    const specifiedData = TestFunctions.extractSpecifiedObjectData(dataSource);
    if (functionName == "getValidation") {
      globalObjects.authServiceGateway.getValidation(specifiedData).then(result => {

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

}

module.exports = AuthServiceGatewayScenarioTester;
