@Unit @Gateway @StandingsServiceGateway
Feature: Standings Service Gateway Unit Feature

  #SUCCESS SCENARIOS

  @Unit_StandingsServiceGateway_Scenario1
  Scenario Outline: Get standings and matches from Standings Service Gateway
    #Set up mock gateway or real user service -> Mock if @Unit, real if @Integration
    Given there is a standing with matches such as "<standing_and_matches>"
    #Gateway.gateway_function()
    When "<gateway_function>" is invoked with "<boxer_id>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | standing_and_matches                                        | gateway_function             | boxer_id                                        | expected_data                                        |
      | Unit_StandingsServiceGateway_Scenario1.standing_and_matches | getStandingAndMatchesOfBoxer | Unit_StandingsServiceGateway_Scenario1.boxer_id | Unit_StandingsServiceGateway_Scenario1.expected_data |

  #FAILURE SCENARIOS

  @Unit_StandingsServiceGateway_Scenario2
  Scenario Outline: Get standings and matches from Standings Service Gateway failure
    #Set up mock gateway or real user service -> Mock if @Unit, real if @Integration
    Given there is a standing with matches such as "<standing_and_matches>"
    #Gateway.gateway_function()
    When "<gateway_function>" is invoked with "<boxer_id>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | standing_and_matches                                              | gateway_function             | boxer_id                                              | expected_data                                              |
      | Unit_StandingsServiceGateway_Scenario2_Fail1.standing_and_matches | getStandingAndMatchesOfBoxer | Unit_StandingsServiceGateway_Scenario2_Fail1.boxer_id | Unit_StandingsServiceGateway_Scenario2_Fail1.expected_data |