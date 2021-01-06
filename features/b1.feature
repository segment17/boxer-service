@EndToEnd
Feature: See details of boxer

  Scenario: Successfully see the details of a boxer
    Given the "boxer service" is running
    And there is a boxer with the id "1"
    When the GetBoxer endpoint is called
    Then the boxer with the id "1" is returned
