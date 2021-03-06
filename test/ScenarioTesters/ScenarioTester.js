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

  thereIsAnActiveUserSpecifiedAsData(dataSource) {
    console.log("controller.mediator.userServiceGateway is getting mock data.");
    const specifiedUser = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.controller.mediator.userServiceGateway.setupAddUser(specifiedUser);
  }

  thereIsAGreetingSpecifiedAsData(dataSource) {
    console.log("controller.mediator.greetingRepository is getting mock data.");
    const specifiedGreeting = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.controller.mediator.greetingRepository.setupAddGreeeting(specifiedGreeting);
  }

  endpointIsCalledWithRequestBody(endpoint, requestBodySource) {
    const request_body = TestFunctions.extractSpecifiedObjectData(requestBodySource);
    if (endpoint == "GetGreeting") {
      globalObjects.client.GetGreeting(request_body, function (err, res) {
        globalObjects.result = res;
      });
    }
  }

  async responseIsAsExpectedResponse(expectedResponseSource) {
    const expected_response = TestFunctions.extractSpecifiedObjectData(expectedResponseSource);
    await TestFunctions.waitUntilResult();
    console.log("Response expected: " + JSON.stringify(expected_response));
    console.log("Response returned: " + JSON.stringify(globalObjects.result));
    //TODO Assertions
  }

}

module.exports = ScenarioTester;