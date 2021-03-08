const globalObjects = require('../../..');
const DefaultScenarioTester = require('../DefaultScenarioTester');
const TestFunctions = require('../../TestFunctions');

class BoxerRepositoryScenarioTester extends DefaultScenarioTester {

  thereIsABoxerSpecifiedAsData(dataSource) {
    console.log("BoxerRepository is getting mock data.");
    const specifiedBoxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.BoxerRepository.setupAddGreeeting(specifiedBoxer);
  }

}

module.exports = BoxerRepositoryScenarioTester;
