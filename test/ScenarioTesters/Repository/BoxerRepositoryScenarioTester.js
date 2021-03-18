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
    else if (unitFunctionName == "addBoxerWithGivenData") {
      globalObjects.boxerRepository.addBoxerWithGivenData(data.fullName, data.birthDate, data.height, data.weight).then(d => {
        globalObjects.result = d;
      });
    }
    else if (unitFunctionName == "editBoxerWithGivenData") {
      globalObjects.boxerRepository.editBoxerWithGivenData(data.id, data.fullName, data.birthDate, data.height, data.weight).then(d => {
        globalObjects.result = d;
      });
    }
    else if (unitFunctionName == "removeBoxerWithId") {
      globalObjects.boxerRepository.removeBoxerWithId(data).then(d => {
        globalObjects.result = d;
      });
    }
    else {
      assert(false);
    }
  }

  async dbHasBoxerSuchAs(dataSource) {
    const expected = TestFunctions.extractSpecifiedObjectData(dataSource);
    let boxerInDB = await globalObjects.boxerRepository.getBoxerWithId(expected.id);
    this.assertionsForDBHasBoxerSuchAs(expected, boxerInDB);
  }

  async dbHasNoBoxerSuchAs(dataSource) {
    const expected = TestFunctions.extractSpecifiedObjectData(dataSource);
    let boxerInDB = await globalObjects.boxerRepository.getBoxerWithId(expected.id);
    this.assertionsForDBHasNoBoxerSuchAs(expected, boxerInDB);
  }

  async returnedDataIsAs(dataSource) {
    const expectedData = TestFunctions.extractSpecifiedObjectData(dataSource);
    await TestFunctions.waitUntilResult();
    // Or separate checks
    if(Object.entries(expectedData).length === 0) {
      assert(Object.entries(globalObjects.result).length === 0);
    } else {
      assert(globalObjects.result.id != null);
      assert(globalObjects.result.fullName != null);
      assert(globalObjects.result.birthDate != null);
      assert(globalObjects.result.height != null);
      assert(globalObjects.result.weight != null);
      assert.strictEqual(globalObjects.result.id, expectedData.id);
      assert.strictEqual(globalObjects.result.fullName, expectedData.fullName);
      assert.strictEqual(globalObjects.result.birthDate, expectedData.birthDate);
      assert.strictEqual(globalObjects.result.height, expectedData.height);
      assert.strictEqual(globalObjects.result.weight, expectedData.weight);
    }
  }

  theLatestBoxerInDBIsSuchAs(dataSource) {
    const boxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.boxerRepository.setupAddLatest(boxer);
  }

}

module.exports = BoxerRepositoryScenarioTester;
