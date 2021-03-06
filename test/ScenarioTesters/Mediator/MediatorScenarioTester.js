const globalObjects = require('../../..');
const ScenarioTester = require('../ScenarioTester');
const TestFunctions = require('../../TestFunctions');

class MediatorScenarioTester extends ScenarioTester {

  thereIsAnActiveUserSpecifiedAsData(dataSource) {
    console.log("mediator.userServiceGateway is getting mock data.")
    const specifiedUser = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.mediator.userServiceGateway.setupAddUser(specifiedUser);
  }

  thereIsAGreetingSpecifiedAsData(dataSource) {
    console.log("mediator.greetingRepository is getting mock data.")
    const specifiedGreeting = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.mediator.greetingRepository.setupAddGreeeting(specifiedGreeting);
  }
  

}

module.exports = MediatorScenarioTester;