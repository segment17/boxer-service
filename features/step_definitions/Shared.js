const { Given, When, Then, Before } = require('@cucumber/cucumber');
const TestFunctions = require('../../test/TestFunctions');
const ScenarioTesterFactory = require('../../test/ScenarioTesters/ScenarioTesterFactory');
const globalObjects = require('../../index');

Before(function (scenario) {
  globalObjects.setScenarioTester(ScenarioTesterFactory.createScenarioTester(scenario));
  globalObjects.scenarioTester.before();
});

// E2E
Given('{string} is running', function (serviceName) {
  //TODO Write code here that turns the phrase above into concrete actions
  // return 'pending';
});

// Used by all levels of testing.
Given('there is an active user specified as {string}', function (dataSource) {
  globalObjects.scenarioTester.thereIsAnActiveUserSpecifiedAsData(dataSource);
});

// Used by all levels of testing.
Given('there is a greeting specified as {string}', function (dataSource) {
  globalObjects.scenarioTester.thereIsAGreetingSpecifiedAsData(dataSource);
});

// Used by E2E and Component
When('{string} is called with {string}', function (endpoint, requestBodySource) {
  globalObjects.scenarioTester.endpointIsCalledWithRequestBody(endpoint, requestBodySource);
});

// Used by E2E and Component
Then('response is as {string}', async function (expectedResponseSource) {
  await globalObjects.scenarioTester.responseIsAsExpectedResponse(expectedResponseSource);
});

// Used by units.
When('{string} is invoked with {string}', function (functionName, dataSource) {
  globalObjects.scenarioTester.unitFunctionIsInvokedWithDataChunk(functionName, dataSource);
});

// Used by units.
Then('returned data is as {string}', async function (expectedDataSource) {
  await globalObjects.scenarioTester.returnedDataIsAsExpectedData(expectedDataSource);
});
