@Unit @Mediator @BoxerServiceMediator
Feature: Boxer Service Mediator Unit Feature

  @Unit_Mediator_Scenario1
  Scenario Outline: Get standings and matches of a boxer
    #Set up mock Mediator or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    #Mediator.mediator_function()
    When "<mediator_function>" is invoked with "<data_chunk>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | boxer                         | mediator_function              | data_chunk                        | expected_data                        |
      | Unit_Mediator_Scenario1.boxer | getBoxerWithStandingAndMatches | Unit_Mediator_Scenario1.data_chunk | Unit_Mediator_Scenario1.expected_data |

  @Unit_Mediator_Scenario2
  Scenario Outline: Edit details of a boxer
    #Set up mock Mediator or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    #Mediator.mediator_function()
    When "<mediator_function>" is invoked with "<data_chunk>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | boxer                         | mediator_function | data_chunk                        | expected_data                        |
      | Unit_Mediator_Scenario2.boxer | editBoxer         | Unit_Mediator_Scenario2.data_chunk | Unit_Mediator_Scenario2.expected_data |