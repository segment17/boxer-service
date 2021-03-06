@Unit @Gateway @StandingsServiceGateway
Feature: Standings Service Gateway Unit Feature

  @Unit_StandingsServiceGateway_Scenario1
  Scenario Outline: Get standings and matches from Standings Service Gateway
    #Set up mock gateway or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    #Gateway.gateway_function()
    When "<gateway_function>" is invoked with "<data_chunk>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | boxer                                         | gateway_function              | data_chunk                                         | expected_data                                         |
      | Unit_StandingsServiceGatewayy_Scenario1.boxer | getStandingAndMatchesOfABoxer | Unit_StandingsServiceGatewayy_Scenario1.data_chunk | Unit_StandingsServiceGatewayy_Scenario1.expected_data |