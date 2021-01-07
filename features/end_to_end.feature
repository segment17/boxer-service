@EndToEnd
Feature: See details of boxer

  Scenario: Successfully see the details of a boxer
    Given the "boxer" service is running
    And the "standings" service is running
    And the "match" service is running
    And there is a boxer with the id "1"
    And the boxer with the id "1" has matches
    When the GetBoxerWithStandingAndMatches endpoint is called
    Then the boxer with the id "1" and his matches and standing are returned
    