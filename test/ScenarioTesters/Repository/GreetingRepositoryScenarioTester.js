const globalObjects = require('../../..');
const ScenarioTester = require('../ScenarioTester');
const TestFunctions = require('../../TestFunctions');

class GreetingRepositoryScenarioTester extends ScenarioTester {

  thereIsAGreetingSpecifiedAsData(dataSource) {
    console.log("greetingRepository is getting mock data.");
    const specifiedGreeting = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.greetingRepository.setupAddGreeeting(specifiedGreeting);
  }

}

module.exports = GreetingRepositoryScenarioTester;
