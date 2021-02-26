

@Unit
Feature: B1 - Successfully see the details of a boxer
  @Gateways
  Scenario: Get standings and matches data from Standings Service Gateway
    Given the standings service has data for the boxer with the id "1"
    # And the data is as specified in the gatewayTestData.txt
    When getStandingAndMatchesOfABoxer function of gateway is called
    Then matches and standing of the boxer with the id "1" are returned

  @Repositories
  Scenario: Get boxer details from Boxer Repository
    Given there is a boxer with the id "1"
    When getBoxerWithId function of repository is called
    Then the details of the boxer with the id "1" are returned