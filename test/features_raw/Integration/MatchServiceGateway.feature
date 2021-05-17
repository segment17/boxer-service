@Integration @Gateway @MatchServiceGateway
Feature: Match Service Gateway Unit Feature

  #SUCCESS SCENARIOS

  @Unit_MatchServiceGateway_Scenario1
  Scenario Outline: Delete matches of boxer
    #Set up mock gateway or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    And there are matches such as "<matches>"
    #Gateway.gateway_function()
    When "<gateway_function>" is invoked with "<boxer_id>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | boxer                                    | matches                                    | gateway_function     | boxer_id                                    | expected_data                                    |
      | Unit_MatchServiceGateway_Scenario1.boxer | Unit_MatchServiceGateway_Scenario1.matches | deleteMatchesOfBoxer | Unit_MatchServiceGateway_Scenario1.boxer_id | Unit_MatchServiceGateway_Scenario1.expected_data |
