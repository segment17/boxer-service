const DefaultScenarioTester = require('./DefaultScenarioTester');
const StandingsServiceGatewayScenarioTester = require('./Gateway/StandingsServiceGatewayScenarioTester');
const AuthServiceGatewayScenarioTester = require('./Gateway/AuthServiceGatewayScenarioTester');
const BoxerRepositoryScenarioTester = require('./Repository/BoxerRepositoryScenarioTester');
const MediatorScenarioTester = require('./Mediator/MediatorScenarioTester');
const TestFunctions = require('../TestFunctions');
const MatchServiceGatewayScenarioTester = require('./Gateway/MatchServiceGatewayScenarioTester');

class ScenarioTesterFactory {

  static createScenarioTester(scenario) {
    if (TestFunctions.isScenarioUnit(scenario, "StandingsServiceGateway") || TestFunctions.isScenarioIntegration(scenario, "StandingsServiceGateway")) {
      return new StandingsServiceGatewayScenarioTester(scenario);
    } else if (TestFunctions.isScenarioUnit(scenario, "AuthServiceGateway") || TestFunctions.isScenarioIntegration(scenario, "AuthServiceGateway")) {
      return new AuthServiceGatewayScenarioTester(scenario);
    } else if (TestFunctions.isScenarioUnit(scenario, "BoxerRepository") || TestFunctions.isScenarioIntegration(scenario, "BoxerRepository")) {
      return new BoxerRepositoryScenarioTester(scenario);
    } else if (TestFunctions.isScenarioUnit(scenario, "Mediator")) {
      return new MediatorScenarioTester(scenario);
    } else if (TestFunctions.isScenarioUnit(scenario, "MatchServiceGateway") || TestFunctions.isScenarioIntegration(scenario, "MatchServiceGateway")) {
      return new MatchServiceGatewayScenarioTester(scenario);
    }
    return new DefaultScenarioTester(scenario);
  }

}

module.exports = ScenarioTesterFactory;
