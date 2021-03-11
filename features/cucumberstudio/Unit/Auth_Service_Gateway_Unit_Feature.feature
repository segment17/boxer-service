@Unit @Gateway @AuthServiceGateway
Feature: Auth Service Gateway Unit Feature


  @Unit_AuthServiceGateway_Scenario1
  Scenario Outline: Get validation from Auth Service Gateway (<hiptest-uid>)
    Given there is a token such as "<token>"
    When "<gateway_function>" is invoked with "<data_chunk>"
    Then returned data is as "<expected_data>"

    Examples:
      | token | gateway_function | data_chunk | expected_data | hiptest-uid |
      | Unit_AuthServiceGateway_Scenario1.token | getValidation | Unit_AuthServiceGateway_Scenario1.data_chunk | Unit_AuthServiceGateway_Scenario1.expected_data | uid:38e51969-7e4f-4c59-ab72-73ac52cbd105 |
