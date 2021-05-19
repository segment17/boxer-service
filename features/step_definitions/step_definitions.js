const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const TestFunctions = require('../../test/TestFunctions');
const ScenarioTesterFactory = require('../../test/ScenarioTesters/ScenarioTesterFactory');
const globalObjects = require('../../index');

Before(async function (scenario) {
  await globalObjects.cleanUp();
  globalObjects.done = false;
  globalObjects.setScenarioTester(ScenarioTesterFactory.createScenarioTester(scenario));
  globalObjects.scenarioTester.before();
  while (!globalObjects.done) { await TestFunctions.sleep(100); }
});

Given('{string} is running', function (serviceName) {
  globalObjects.scenarioTester.serviceIsRunning(serviceName);
});

Given('there is a boxer such as {string}', async function (boxerDataSource) {
  globalObjects.done = false;
  await globalObjects.scenarioTester.thereIsABoxerSuchAs(boxerDataSource);
  while (!globalObjects.done) { await TestFunctions.sleep(100); }
});

Given('there is a token such as {string}', async function (tokenDataSource) {
  globalObjects.done = false;
  await globalObjects.scenarioTester.thereIsATokenSuchAs(tokenDataSource);
  while (!globalObjects.done) { await TestFunctions.sleep(100); }
});

When('{string} is called with {string}', function (endpoint, requestBodySource) {
  globalObjects.scenarioTester.endpointIsCalledWithRequestBody(endpoint, requestBodySource);
});

Then('response is as {string}', async function (expectedResponse) {
  await globalObjects.scenarioTester.responseIsAs(expectedResponse);
});

Then('DB has boxer such as {string}', async function (boxerDataSource) {
  await globalObjects.scenarioTester.dbHasBoxerSuchAs(boxerDataSource);
});

Then('DB does not have boxer such as {string}', async function (boxerDataSource) {
  await globalObjects.scenarioTester.dbHasNoBoxerSuchAs(boxerDataSource);
});

Given('the latest boxer in DB is such as {string}', async function (boxerDataSource) {
  await globalObjects.scenarioTester.latestBoxerInDBIsSuchAs(boxerDataSource);
});

Given('there are matches such as {string}', function (matchesDataSource) {
  globalObjects.scenarioTester.thereAreMatchesSuchAs(matchesDataSource);
});

Given('there is a standing such as {string}', function (standingDataSource) {
  globalObjects.scenarioTester.thereAreMatchesSuchAs(standingDataSource);
});

When('{string} is invoked with {string}', function (unitFunctionName, invocationDataSource) {
  globalObjects.scenarioTester.unitFunctionIsInvokedWithData(unitFunctionName, invocationDataSource);
});

Then('returned data is as {string}', async function (expectedDataSource) {
  await globalObjects.scenarioTester.returnedDataIsAs(expectedDataSource);
});

Given('there is a standing with matches such as {string}', async function (dataSource) {
  globalObjects.done = false;
  await globalObjects.scenarioTester.thereIsAStandingAndMatchesSuchAs(dataSource);
  while (!globalObjects.done) { await TestFunctions.sleep(100); }
});

Then('match service does not have any matches of {string}', async function (boxerDataSource) {
  await globalObjects.scenarioTester.matchServiceDoesNotHaveAnyMatchesOfBoxer(boxerDataSource);
});