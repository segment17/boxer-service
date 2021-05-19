const globalObjects = require('../../..');
const DefaultScenarioTester = require('../DefaultScenarioTester');
const TestFunctions = require('../../TestFunctions');
const assert = require('assert');

class BoxerRepositoryScenarioTester extends DefaultScenarioTester {

  thereIsABoxerSuchAs(dataSource) {
    const specifiedBoxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.boxerRepository.setupAddBoxer(specifiedBoxer);
    globalObjects.done = true;
  }

  async latestBoxerInDBIsSuchAs(dataSource) {
    const specifiedBoxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.boxerRepository.setupAddLatest(specifiedBoxer);
    this.lastInsertId = await globalObjects.boxerRepository.getLatestId();
    globalObjects.done = true;
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
    if (this.lastInsertId != undefined) {
      expected.id = this.lastInsertId + 1;
    }
    let response = await globalObjects.boxerRepository.getBoxerWithId(expected.id);
    this.assertionsForDBHasBoxerSuchAs(expected, response.boxer);
  }

  async dbHasNoBoxerSuchAs(dataSource) {
    const expected = TestFunctions.extractSpecifiedObjectData(dataSource);
    let response = await globalObjects.boxerRepository.getBoxerWithId(expected.id);
    assert(response.code == 404);
  }

  async returnedDataIsAs(dataSource) {
    const expectedData = TestFunctions.extractSpecifiedObjectData(dataSource);
    await TestFunctions.waitUntilResult();
    
    // Or separate checks
    assert(globalObjects.result.code != null);
    assert(globalObjects.result.message != null);
    assert(globalObjects.result.boxer.id != null);
    assert(globalObjects.result.boxer.fullName != null);
    assert(globalObjects.result.boxer.birthDate != null);
    assert(globalObjects.result.boxer.height != null);
    assert(globalObjects.result.boxer.weight != null);
    assert(globalObjects.result.code, expectedData.code);
    assert.strictEqual(globalObjects.result.message, expectedData.message);

    if (this.lastInsertId != undefined) {
      assert.strictEqual(globalObjects.result.boxer.id, this.lastInsertId + 1);
    } 
    
    else {
      assert.strictEqual(globalObjects.result.boxer.id, expectedData.boxer.id);
    }
    
    assert.strictEqual(globalObjects.result.boxer.fullName, expectedData.boxer.fullName);
    assert.strictEqual(globalObjects.result.boxer.birthDate, expectedData.boxer.birthDate);
    assert.strictEqual(globalObjects.result.boxer.height, expectedData.boxer.height);
    assert.strictEqual(globalObjects.result.boxer.weight, expectedData.boxer.weight);
  }

  theLatestBoxerInDBIsSuchAs(dataSource) {
    const boxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.boxerRepository.setupAddLatest(boxer);
  }

}

module.exports = BoxerRepositoryScenarioTester;
