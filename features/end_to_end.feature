@EndToEnd
Feature: See details of boxer

  @B1
  Scenario: Successfully see the details of a boxer
    Given the "boxer" service is running
    And the "standings" service is running
    And the "match" service is running
    And there is a boxer with the id "1"
    And the boxer with the id "1" has matches
    When the GetBoxerWithStandingAndMatches endpoint is called
    Then the boxer with the id "1" and his matches and standing are returned
    

  @B3
  Scenario: Successfully add a new boxer
    Given the "boxer" service is running
    And the "auth" service is running
    And the latest boxer in the BoxerService database has id "2"
    #Change test data with file
    When the AddBoxer endpoint is called with the test data
    Then the details of the created boxer are returned
    And the id of the returned boxer is "3"
