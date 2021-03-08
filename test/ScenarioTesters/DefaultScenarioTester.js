const { Given, When, Then, Before } = require('@cucumber/cucumber');
const TestFunctions = require('../TestFunctions');
const globalObjects = require('../../index');

class ScenarioTester {

  constructor(scenario) {
    this.scenario = scenario;
  }

  // Special Before Scenario Function
  before() {
    globalObjects.resetResult();
    globalObjects.setScenario(this.scenario);
    if (!TestFunctions.isScenarioE2E(this.scenario) && !TestFunctions.isScenarioIntegration(this.scenario)) {
      // If it's not E2E or Integration, it means everything is mocked.
      globalObjects.mock();
    }
  }

  thereIsAnActiveStandingSpecifiedAsData(dataSource) {
    console.log("controller.mediator.StandingsServiceGateway is getting mock data.");
    const specifiedStanding = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.controller.mediator.StandingsServiceGateway.setupAddStanding(specifiedStanding);
  }

  thereIsABoxerSuchAs(dataSource) {
    console.log("controller.mediator.BoxerRepository is getting mock data.");
    const specifiedBoxer = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.controller.mediator.boxerRepository.setupAddBoxer(specifiedBoxer);
  }

  endpointIsCalledWithRequestBody(endpoint, requestBodySource) {
    const requestBody = TestFunctions.extractSpecifiedObjectData(requestBodySource);
    if (endpoint == "GetBoxer") {
      globalObjects.client.GetBoxer(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    }
  }

  async responseIsAsExpectedResponse(expectedResponseSource) {
    const expectedResponse = TestFunctions.extractSpecifiedObjectData(expectedResponseSource);
    await TestFunctions.waitUntilResult();
    console.log("Response expected: " + JSON.stringify(expectedResponse));
    console.log("Response returned: " + JSON.stringify(globalObjects.result));
    //TODO Assertions
  }

}

module.exports = ScenarioTester;