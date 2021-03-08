@Unit @Gateway @AuthServiceGateway
Feature: Auth Service Gateway Unit Feature

  @Unit_AuthServiceGateway_Scenario1
  Scenario Outline: Get validation from Auth Service Gateway
    #Set up mock gateway or real user service -> Mock if @Unit, real if @Integration
    Given there is a token such as "<token>"
    #Gateway.gateway_function()
    When "<gateway_function>" is invoked with "<data_chunk>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | token                                   | gateway_function | data_chunk                                   | expected_data                                   |
      | Unit_AuthServiceGateway_Scenario1.token | getValidation    | Unit_AuthServiceGateway_Scenario1.data_chunk | Unit_AuthServiceGateway_Scenario1.expected_data |