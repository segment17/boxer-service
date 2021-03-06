const ScenarioTester = require('../ScenarioTesters/ScenarioTester');
const UserServiceGatewayScenarioTester = require('./Gateway/UserServiceGatewayScenarioTester');
const GreetingRepositoryScenarioTester = require('./Repository/GreetingRepositoryScenarioTester');
const MediatorScenarioTester = require('./Mediator/MediatorScenarioTester');
const TestFunctions = require('../TestFunctions');

class ScenarioTesterFactory {



  static createScenarioTester(scenario) {
    if (TestFunctions.isScenarioUnit(scenario, "UserServiceGateway") || TestFunctions.isScenarioIntegration(scenario, "UserServiceGateway")) {
      return new UserServiceGatewayScenarioTester(scenario);
    } else if (TestFunctions.isScenarioUnit(scenario, "GreetingRepository") || TestFunctions.isScenarioIntegration(scenario, "GreetingRepository")) {
      return new GreetingRepositoryScenarioTester(scenario);
    } else if (TestFunctions.isScenarioUnit(scenario, "Mediator")) {
      return new MediatorScenarioTester(scenario);
    }
    return new ScenarioTester(scenario);
  }

}

module.exports = ScenarioTesterFactory;