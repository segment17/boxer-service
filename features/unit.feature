@Unit @B1
Feature: B1 - Successfully see the details of a boxer

  @Gateway
  Scenario: Get standings and matches data from Standings Service Gateway
    Given the standings service has data for the boxer with the id "1"
    # And the data is as specified in the gatewayTestData.txt
    When getStandingAndMatchesOfABoxer function of gateway is called
    Then matches and standing of the boxer with the id "1" are returned

  @Mediator
  Scenario: getBoxerWithStandingAndMatches function works as expected
    Given the "standings" service gateway is mocked
    And the "boxers" repository is mocked
    When the getBoxerWithStandingAndMatches function is called
    Then the boxer with the id "1" and his matches and standing are returned

  @Repository
  Scenario: Get boxer details from Boxer Repository
    Given there is a boxer with the id "1"
    When getBoxerWithId function of repository is called
    Then the details of the boxer with the id "1" are returned
 

@Unit @B2
Feature: B2 - Successfully see the details of a boxer

  @Gateway
  Scenario: Get validation from Auth Service Gateway
    Given the auth service has token "emanresu_ymmud_drowssap_ymmud"
    When getValidation function of gateway is called
    Then the response with code "200" and token "emanresu_ymmud_drowssap_ymmud" is returned

  @Mediator
  Scenario: Edit boxer details in Boxer Mediator
    Given the "boxers" repository is mocked
    #Change test data with file
    When the editBoxer function is called with the test data
    Then the edited boxer with the id "1" is returned

  @Repository
  Scenario: Edit boxer details in Boxer Repository
    Given there is a boxer with the id "1"
    #Change test data with file
    When editBoxerWithId function of repository is called with the test data
    Then the edited boxer with the id "1" is returned