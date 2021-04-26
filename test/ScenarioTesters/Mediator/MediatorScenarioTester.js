const globalObjects = require('../../..');
const DefaultScenarioTester = require('../DefaultScenarioTester');
const TestFunctions = require('../../TestFunctions');

class MediatorScenarioTester extends DefaultScenarioTester {

  thereIsAnActiveStandingSpecifiedAsData(dataSource) {
    const specifiedStanding = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.mediator.StandingsServiceGateway.setupAddStanding(specifiedStanding);
  }

  thereIsABoxerSpecifiedAsData(dataSource) {
    const specifiedBoxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.mediator.BoxerRepository.setupAddGreeeting(specifiedBoxer);
  }
  

}

module.exports = MediatorScenarioTester;