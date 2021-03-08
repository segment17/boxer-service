const { Given, When, Then, Before } = require('@cucumber/cucumber');
const TestFunctions = require('../../test/TestFunctions');
const ScenarioTesterFactory = require('../../test/ScenarioTesters/ScenarioTesterFactory');
const globalObjects = require('../../index');

Before(function (scenario) {
  globalObjects.setScenarioTester(ScenarioTesterFactory.createScenarioTester(scenario));
  globalObjects.scenarioTester.before();
});


Given('{string} is running', function (serviceName) {
  globalObjects.scenarioTester.serviceIsRunning(serviceName);
});

Given('there is a boxer such as {string}', function (boxerDataSource) {
  globalObjects.scenarioTester.thereIsABoxerSuchAs(boxerDataSource);
});

Given('there is a token such as {string}', function (tokenDataSource) {
  globalObjects.scenarioTester.thereIsATokenSuchAs(tokenDataSource);
});

When('{string} is called with {string}', function (endpoint, requestBodySource) {
  globalObjects.scenarioTester.endpointIsCalledWithRequestBody(endpoint, requestBodySource);
});

Then('response is as {string}', function (expectedResponse) {
  globalObjects.scenarioTester.responseIsAs(expectedResponse);
});

Then('DB does not have boxer such as {string}', function (boxerDataSource) {
  globalObjects.scenarioTester.dbDoesNotHaveBoxerSuchAs(boxerDataSource);
});

Then('DB has boxer such as {string}', function (boxerDataSource) {
  globalObjects.scenarioTester.dbHasBoxerSuchAs(boxerDataSource);
});

Given('the latest boxer in DB is such as {string}', function (boxerDataSource) {
  globalObjects.scenarioTester.theLatestBoxerInDBIsSuchAs(boxerDataSource);
});

Given('there are matches such as {string}', function (matchesDataSource) {
  globalObjects.scenarioTester.thereAreMatchesSuchAs(matchesDataSource);
});

Given('there is a standing such as {string}', function (standingDataSource) {
  globalObjects.scenarioTester.thereAreMatchesSuchAs(standingDataSource);
});

When('{string} is invoked with {string}', function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('returned data is as {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});