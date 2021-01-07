const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
let controller = require('../../src/controllers/controller.js');
let med = require('../../src/services/mediator.js');

Given('the {string} service gateway is mocked', function (string) {
  if (string == "standings") {
    controller.useMocks()
  }

  med.call();
});

Given('there is a boxer with the id {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the GetBoxerWithStandingAndMatches endpoint is called', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


Then('the boxer with the id {string} and his matches and standing are returned', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
