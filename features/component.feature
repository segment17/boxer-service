@Component
Feature: B1 - Successfully see the details of a boxer

  @B1
  Scenario: Successfully see the details of a boxer
    Given the "standings" service gateway is mocked
    And the "boxers" repository is mocked
    When the GetBoxerWithStandingAndMatches endpoint is called
    Then the boxer with the id "1" and his matches and standing are returned

  @B2
  Scenario: Successfully edit the details of a boxer
    Given the "auth" service gateway is mocked
    And the "boxers" repository is mocked
    #Change test data with file
    When the EditBoxer endpoint is called with the test data
    Then the edited boxer with the id "1" is returned

  @B3
  Scenario: Successfully add a new boxer
    Given the "boxers" repository is mocked
    And the "auth" service is mocked
    And the latest boxer in the BoxerService database has id "2"
    #Change test data with file
    When the AddBoxer endpoint is called with the test data
    Then the details of the created boxer are returned
    And the id of the returned boxer is "3"
