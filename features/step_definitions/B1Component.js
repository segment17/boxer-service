const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
let controller = require('../../src/controllers/controller.js');

Given('the {string} service gateway is mocked', function (string) {
  if (string == "standings") {
    controller.mockStandingsServiceGateway();
  }
});


Given('the {string} repository is mocked', function (string) {
  if (string == "boxers") {
    controller.mockBoxersRepository();
  }
});

When('the GetBoxerWithStandingAndMatches endpoint is called', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the boxer with the id {string} and his matches and standing are returned', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});