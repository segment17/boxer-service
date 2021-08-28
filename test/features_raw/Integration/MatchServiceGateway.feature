@Integration @Gateway @MatchServiceGateway
Feature: Match Service Gateway Integration Feature

  #SUCCESS SCENARIOS

  @MatchServiceGateway_Scenario1 @B4
  Scenario Outline: Delete matches of boxer
    #Set up mock gateway or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    And there are matches such as "<matches>"
    And there is a token such as "<token>"
    #Gateway.gateway_function()
    When "<gateway_function>" is invoked with "<data_chunk>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | boxer                               | matches                               | token                               | gateway_function     | data_chunk                               | expected_data                               |
      | MatchServiceGateway_Scenario1.boxer | MatchServiceGateway_Scenario1.matches | MatchServiceGateway_Scenario1.token | removeMatchesOfBoxer | MatchServiceGateway_Scenario1.data_chunk | MatchServiceGateway_Scenario1.expected_data |
