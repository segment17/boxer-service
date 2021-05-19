@Unit @Gateway @AuthServiceGateway
Feature: Auth Service Gateway Unit Feature

  #SUCCESS SCENARIOS

  @AuthServiceGateway_Scenario1
  Scenario Outline: Get validation from Auth Service Gateway
    #Set up mock gateway or real user service -> Mock if @Unit, real if @Integration
    Given there is a token such as "<token>"
    #Gateway.gateway_function()
    When "<gateway_function>" is invoked with "<data_chunk>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | token                              | gateway_function | data_chunk                              | expected_data                              |
      | AuthServiceGateway_Scenario1.token | getValidation    | AuthServiceGateway_Scenario1.data_chunk | AuthServiceGateway_Scenario1.expected_data |

  #FAIL SCENARIOS

  @AuthServiceGateway_Scenario2
  Scenario Outline: Get validation from Auth Service Gateway failure
    #Set up mock gateway or real user service -> Mock if @Unit, real if @Integration
    Given there is a token such as "<token>"
    #Gateway.gateway_function()
    When "<gateway_function>" is invoked with "<data_chunk>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | token                                    | gateway_function | data_chunk                                    | expected_data                                    |
      | AuthServiceGateway_Scenario2_Fail1.token | getValidation    | AuthServiceGateway_Scenario2_Fail1.data_chunk | AuthServiceGateway_Scenario2_Fail1.expected_data |