@Unit @Repository @BoxerRepository
Feature: Boxer Service Repository Unit Feature

  @Unit_Repository_Scenario1
  Scenario Outline: Get boxer details from Boxer Repository
    #Set up mock Repository or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<boxer_id>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | boxer                           | repository_function | boxer_id                         | expected_data                           |
      | Unit_Repository_Scenario1.boxer | getBoxerWithId      | Unit_Repository_Scenario1.boxer_id | Unit_Repository_Scenario1.expected_data |

  @Unit_Repository_Scenario2
  Scenario Outline: Edit details of a boxer in Boxer Repository
    #Set up mock Repository or real user service -> Mock if @Unit, real if @Integration
    Given there is a boxer such as "<boxer>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<data_chunk>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | boxer                           | repository_function | data_chunk                           | expected_data                           |
      | Unit_Repository_Scenario2.boxer | editBoxerWithId     | Unit_Repository_Scenario2.data_chunk | Unit_Repository_Scenario2.expected_data |