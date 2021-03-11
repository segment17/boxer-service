@Unit @Gateway @StandingsServiceGateway
Feature: Standings Service Gateway Unit Feature


  @Unit_StandingsServiceGateway_Scenario1
  Scenario Outline: Get standings and matches from Standings Service Gateway (<hiptest-uid>)
    Given there is a standing with matches such as "<standing_and_matches>"
    When "<gateway_function>" is invoked with "<boxer_id>"
    Then returned data is as "<expected_data>"

    Examples:
      | standing_and_matches | gateway_function | boxer_id | expected_data | hiptest-uid |
      | Unit_StandingsServiceGateway_Scenario1.standing_and_matches | getStandingAndMatchesOfBoxer | Unit_StandingsServiceGateway_Scenario1.boxer_id | Unit_StandingsServiceGateway_Scenario1.expected_data | uid:6ef67edf-75e1-4d1f-b4df-5d5d3cc6cebd |
