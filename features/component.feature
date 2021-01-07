@Component
Feature: B1 - Successfully see the details of a boxer

  Scenario: Successfully see the details of a boxer
    Given the "standings" service gateway is mocked
    And there is a boxer with the id "1"
    When the GetBoxerWithStandingAndMatches endpoint is called
    Then the boxer with the id "1" and his matches and standing are returned
