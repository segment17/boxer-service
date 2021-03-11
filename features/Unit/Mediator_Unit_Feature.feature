@Unit @Mediator @BoxerServiceMediator
Feature: Mediator Unit Feature


  @Unit_Mediator_Scenario1
  Scenario Outline: Get standings and matches of a boxer (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    When "<mediator_function>" is invoked with "<data_chunk>"
    Then returned data is as "<expected_data>"

    Examples:
      | boxer | mediator_function | data_chunk | expected_data | hiptest-uid |
      | Unit_Mediator_Scenario1.boxer | getBoxerWithStandingAndMatches | Unit_Mediator_Scenario1.data_chunk | Unit_Mediator_Scenario1.expected_data | uid:b712573b-aa2e-4aa5-9748-29c9c5a532ad |

  @Unit_Mediator_Scenario2
  Scenario Outline: Edit details of a boxer (<hiptest-uid>)
    Given there is a boxer such as "<boxer>"
    When "<mediator_function>" is invoked with "<data_chunk>"
    Then returned data is as "<expected_data>"

    Examples:
      | boxer | mediator_function | data_chunk | expected_data | hiptest-uid |
      | Unit_Mediator_Scenario2.boxer | editBoxer | Unit_Mediator_Scenario2.data_chunk | Unit_Mediator_Scenario2.expected_data | uid:2c3030b9-7a1b-4b09-9ccf-cc61a629a5fe |
