const globalObjects = require('../../..');
const DefaultScenarioTester = require('../DefaultScenarioTester');
const TestFunctions = require('../../TestFunctions');
const assert = require('assert');

class BoxerRepositoryScenarioTester extends DefaultScenarioTester {

  thereIsABoxerSuchAs(dataSource) {
    console.log("controller.mediator.BoxerRepository is getting mock data.");
    const specifiedBoxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.boxerRepository.setupAddBoxer(specifiedBoxer);
  }

  unitFunctionIsInvokedWithData(unitFunctionName, invocationDataSource) {
    const data = TestFunctions.extractSpecifiedObjectData(invocationDataSource);
    if (unitFunctionName == "getBoxerWithId") {
      globalObjects.boxerRepository.getBoxerWithId(data).then(d => {

        globalObjects.result = d;
      });
    }
  }

  async returnedDataIsAs(dataSource) {
    const expectedData = TestFunctions.extractSpecifiedObjectData(dataSource);
    await TestFunctions.waitUntilResult();
    // Or separate checks
    assert.strictEqual(globalObjects.result.id, expectedData.id);
    assert.strictEqual(globalObjects.result.name, expectedData.name);
    assert.strictEqual(globalObjects.result.birthDate, expectedData.birthDate);
    assert.strictEqual(globalObjects.result.height, expectedData.height);
    assert.strictEqual(globalObjects.result.weight, expectedData.weight);
  }

}

module.exports = BoxerRepositoryScenarioTester;
